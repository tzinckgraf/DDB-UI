import { Component, OnInit } from '@angular/core';

import { Client } from '../../model/client';
import { ClientService } from 'src/app/service/client.service';
import { ClientAttributeService } from 'src/app/service/client-attribute.service';
import { ClientAttribute } from 'src/app/model/client-attribute';

/**
 * Attributes are maps of attribute name to value
 */
interface ClientInfo {
  id: string;
  mainAttributes: Map<string, any>;
  extraAttributes: Map<string, any>;
}

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public mainAttributes: ClientAttribute[] = [];
  public extraAttributes: ClientAttribute[] = [];
  public clients: ClientInfo[];

  public attributeMap: Map<string, ClientAttribute>;

  constructor(private clientService: ClientService,
              private clientAttributeService: ClientAttributeService) {
  }

  ngOnInit() {
    this.attributeMap = new Map();
    this.loadClientAttributes();
  }

  private loadClientAttributes() {
    this.clientAttributeService
      .getAllAttributes()
      .subscribe(
        (data: ClientAttribute[]) => {
          data.forEach((attribute: ClientAttribute) => {
            if (attribute.required) {
              this.mainAttributes.push(attribute);
            } else {
              this.extraAttributes.push(attribute);
            }
            this.attributeMap.set(attribute.id, attribute);
          });
        },
        (error: any) => console.log('error ', error),
        () => this.loadClients()
      );
  }

  private loadClients() {

    this.clientService.getAllClients().subscribe(
      (data: Client[]) => {
        this.clients = data.map((c: Client) => {
          return this.clientToClientInfo(c);
        });
      },
      (error: any) => console.log('error', error)
    );
  }

  public clientToClientInfo(client: Client) {
    const attributes = client.attributes.reduce(
      (result, element) => {
        const attribute = this.attributeMap.get(element.clientAttributeTypeId);
        if (attribute.required) {
          result[0].set(attribute.name, element.value);
        } else {
          result[1].set(attribute.name, element.value);
        }
        return result;
      }, [new Map<string, any>(), new Map<string, any>()]
    );

    return {
      id: client.id,
      mainAttributes: attributes[0],
      extraAttributes: attributes[1]
    } as ClientInfo;

  }
}

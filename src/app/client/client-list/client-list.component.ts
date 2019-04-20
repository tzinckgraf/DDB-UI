import { Component, OnInit } from '@angular/core';

import { Client } from '../../model/client';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  public clients: Client[];

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.getAllClients().subscribe(
      (data: Client[]) => { this.clients = data; });
  }
}

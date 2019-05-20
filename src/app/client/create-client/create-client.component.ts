import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Client } from '../../model/client';
import { ClientAttributeService } from '../../service/client-attribute.service';
import { ClientAttribute } from 'src/app/model/client-attribute';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  public attributeMap: Map<string, ClientAttribute>;
  private clientForm: FormGroup;

  public requiredAttributes: ClientAttribute[];
  public notRequiredAttributes: ClientAttribute[];

  constructor(private formBuilder: FormBuilder,
              private clientAttributeService: ClientAttributeService,
              private clientService: ClientService) {
    this.attributeMap = new Map<string, ClientAttribute>();
    this.clientForm = this.formBuilder.group({ });
  }

  ngOnInit() {
    this.loadAttributeTypes();
  }

  loadAttributeTypes() {
    this.clientAttributeService.getAllAttributes().subscribe(
      (data: ClientAttribute[]) => {
        data.forEach((value) => {
          this.attributeMap.set(value.id, value);
        });
        this.splitAttributes(data);
        this.createAttributeControls();
      });
  }

  /**
   * Split attributes between required and non-required
   * @param attributes
   */
  splitAttributes(attributes: ClientAttribute[]) {
    const [required, notRequired] = attributes
      .reduce((result, element) => {
        result[element.required ? 0 : 1].push(element);
        return result;
      }, [[], []]);
    this.requiredAttributes = required;
    this.notRequiredAttributes = notRequired;
  }

  createAttributeControls() {
    this.requiredAttributes.forEach((x: ClientAttribute) => {
      this.clientForm.addControl(
        x.id,
        new FormControl(null, Validators.required)
      );
    });
    this.notRequiredAttributes.forEach((x: ClientAttribute) => {
      this.clientForm.addControl(
        x.id,
        new FormControl(null)
      );
    });
  }

  submitClient(clientForm) {
    const values = Object.keys(clientForm)
    .filter((id: string) => {
      return clientForm[id] != null; })
    .map((id: string) => {
      const attribute = this.attributeMap.get(id);
      return {
        attribName: attribute.name,
        attribValue: clientForm[id]
      };
    });
    console.log('submit');
    // this.clientService.createClient(attributes)
    //   .subscribe((result: any) => {
    //     console.log(result);
    //   }, (err) => {
    //     console.log('error', err);
    //   });
  }
}

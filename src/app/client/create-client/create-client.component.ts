import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Client } from '../../model/client';
import { stringify } from '@angular/core/src/render3/util';
import { ClientAttributeService } from '../../service/client-attribute.service';
import { ClientAttribute } from 'src/app/model/client-attribute';
import { getParentInjectorLocation } from '@angular/core/src/render3/di';
import { ClientService } from 'src/app/service/client.service';

@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  public attributeTypeMap: Map<string, ClientAttribute>;
  private clientForm: FormGroup;

  private requiredAttributes: ClientAttribute[];
  private notRequiredAttributes: ClientAttribute[];

  constructor(private formBuilder: FormBuilder,
              private clientAttributeService: ClientAttributeService,
              private clientService: ClientService) {
    this.attributeTypeMap = new Map<string, ClientAttribute>();
    this.createForm();
    this.loadAttributeTypes();
  }

  ngOnInit() { }

  createForm() {
    this.clientForm = this.formBuilder.group({
      attributes: this.formBuilder.array([])
    });
    // this.clientForm = this.formBuilder.group({
    //   clientName: new FormControl(null, Validators.required),
    //   attributes: this.formBuilder.array([])
    // });
  }

  loadAttributeTypes() {
    this.clientAttributeService.getAllAttributes().subscribe(
      (data: ClientAttribute[]) => {
        this.splitAttributes(data);
        this.createAttributeControls()
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
  }

  get attributes(): FormArray {
    return this.clientForm.get('attributes') as FormArray;
  }

  get attributeTypes() {
    return this.attributeTypeMap.keys();
  }

  addAttributeForm() {
    this.attributes.push(
      this.formBuilder.group({
        attributeId: new FormControl(null, Validators.required),
        value: new FormControl(null)
      })
    );
  }

  removeAttribute(index: number) {
    this.attributes.removeAt(index);
  }

  submitClient(clientForm) {
    const clientAttributes = clientForm.attributes.map((x) => {
      return {attribName: x.attributeId, attribValue: x.value};
    });
    delete clientForm.attributes;

    const clientRequiredAttributes = Object.entries(clientForm).map((x) => {
        return {attribName: x[0], attribValue: x[1]};
    });

    const attributes = clientAttributes.concat(clientRequiredAttributes);
    this.clientService.createClient(attributes)
      .subscribe((result: any) => {
        console.log(result);
      }, (err) => {
        console.log('error', err);
      });
    console.log('Client form', attributes);
  }
}

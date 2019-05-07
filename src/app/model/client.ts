export interface Client {
  id: string;
  attributes: Attribute[];
}


interface Attribute {
  clientAttributeTypeId: string;
  value: any;
}

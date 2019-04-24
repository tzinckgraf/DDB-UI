export class Client {
  constructor(
    public id: number,
    public name: string,
    public onboardingComplete: boolean,
    public attributes: Attribute[] = []) {
  }
}


export class Attribute {
  constructor(
    public attribName: string,
    public attribType: string,
    public attribValue: string
  ) { }
}

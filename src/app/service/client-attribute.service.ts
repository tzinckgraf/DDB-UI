import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ClientAttribute } from '../model/client-attribute';

@Injectable({
  providedIn: 'root'
})
export class ClientAttributeService {

  private url: string = 'http://localhost:8090/api/v1';

  constructor(private http: HttpClient) { }

  public getAllAttributes() {
    return this.http.get(`${this.url}/clientAttributeType`);
  }
}

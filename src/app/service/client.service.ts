import { Injectable } from '@angular/core';
import { Client, Attribute } from '../model/client';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  url: string = 'http://localhost:8090/api/v1'

  public clients: Client[] = [];

  constructor(private http: HttpClient) { }

  public getAllClients() {
    return this.http.get(`${this.url}/client`);
  }
}

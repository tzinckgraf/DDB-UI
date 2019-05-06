import { Injectable } from '@angular/core';
import { Client, Attribute } from '../model/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private url: string = 'http://localhost:8090/api/v1';

  public clients: Client[] = [];

  constructor(private http: HttpClient) { }

  public getAllClients() {
    return this.http.get(`${this.url}/client`);
  }

  public createClient(values): Observable<any> {
    return this.http.post(`${this.url}/client/new`, values);
  }
}

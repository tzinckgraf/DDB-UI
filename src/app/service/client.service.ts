import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  // private url: string = 'http://localhost:8090/api/v1';
  private url: string = 'http://localhost:3000';

  public clients: Client[] = [];

  constructor(private http: HttpClient) { }

  public getAllClients() {
    return this.http.get(`${this.url}/clients`);
  }

  public createClient(values): Observable<any> {
    return this.http.post(`${this.url}/clients/new`, values);
  }
}

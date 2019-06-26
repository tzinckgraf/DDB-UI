import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private url: string = 'http://localhost:8090/api/v1';

  constructor(private http: HttpClient) { }

  public getAllEvents() {
    return this.http.get(`${this.url}/events`);
  }

}

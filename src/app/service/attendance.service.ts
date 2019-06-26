import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  private url: string = 'http://localhost:8090/api/v1';
  
  constructor(private http: HttpClient) { }

  public getAttendanceForEvent(eventId: string) {

  }

  public addClientToEvent(clientId: string, eventId: string) {
    return this.http.post(
      `${this.url}/event/attend`,
      {clientId: clientId, eventId: eventId}
    );
  }
}

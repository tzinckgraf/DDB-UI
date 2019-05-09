import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url: String = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  public getAllServices(){
    return this.http.get(`${this.url}/service`);
  }

  public getScheduleByService(id: string){
    return this.http.get(`${this.url}/service/${id}/schedule`)
  }
}

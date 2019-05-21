import { Component, OnInit } from '@angular/core';

import { EventService } from '../../service/event.service';
import { ServiceService } from '../../service/service.service';

import { Service } from '../../model/service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  public services: Service[];

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.getAllServices();
  }

  public getAllServices() {
    this.serviceService.getAllServices().subscribe(
      (data: Service[]) => { this.services = data; }
    );
  }

  public nextRunTime(serviceId: string) {

  }

}

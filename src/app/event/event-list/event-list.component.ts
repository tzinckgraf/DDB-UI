import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from 'src/app/model/event';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {

  public events: Event[];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.loadEvents();
  }

  loadEvents() {
    this.eventService.getAllEvents().subscribe(
      (data: any[]) => {
        this.events = data.map(element => {
          var startTime = this.jsonToDate(element['attribute']['hours']['start']['datetime']);
          var endTime = this.jsonToDate(element['attribute']['hours']['end']['datetime']);
          var capacity: Number = element['attribute']['capacity'];
          var id: String = element['id'];
          var serviceId: String = element['serviceId'];
          return {
            startTime: startTime,
            endTime: endTime,
            name: 'TEST',
            id: id,
            serviceId: serviceId,
            capacity: capacity
          } as Event;
        });
      }
    );
  }

  private jsonToDate(datetime: any): Date {
    var timeDate = datetime['date'];
    var timeHour = datetime['time'];
    return new Date(
      timeDate['year'],
      timeDate['month'],
      timeDate['day'],
      timeHour['hour'],
      timeHour['minute'],
      timeHour['second'],
    );
  }
}

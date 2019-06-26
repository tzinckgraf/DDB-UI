import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AttendanceService } from 'src/app/service/attendance.service';

@Component({
  selector: 'app-event-attendance',
  templateUrl: './event-attendance.component.html',
  styleUrls: ['./event-attendance.component.scss']
})
export class EventAttendanceComponent implements OnInit {

  public id: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private attendanceService: AttendanceService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  attendance(event){
    console.log(event);
    this.attendanceService.addClientToEvent(event.id, this.id).subscribe(
      x => {
        console.log("test");
      }
    )
  }

}

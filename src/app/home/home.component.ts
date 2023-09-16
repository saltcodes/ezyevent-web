import {AfterViewInit, Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

import {environment} from "../../environments/environment";
import {EventModel} from "../models/event.model";
import {DataServiceService} from "../services/data-service.service";
import {NbWindowService} from "@nebular/theme";
import {Result} from "../models/person.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  //
  isLoggedIn = true;
  events: EventModel[] | undefined = []
  isMap = true
  isDataLoading = true
  attendees?: Result[]
  eventObject: EventModel | undefined
  // @ts-ignore
  @ViewChild('eventModal') eventModal: TemplateRef<any>

  constructor(private dataService: DataServiceService, private window:NbWindowService) {
  }

  getEvents() {
    this.dataService.getEventsFrom(0, 0).subscribe(rpx => {
        this.events = rpx.data
        this.isDataLoading = false
      }
    )
  }


  openEvent(event:EventModel){
    this.eventObject = event
    this.window.open(this.eventModal,{
      title: this.eventObject.name,
      context: this.eventObject.details
    })

    this.dataService.getAttendees().subscribe(data=>{
      this.attendees = data.results
    })
  }

  ngOnInit(): void {
    this.getEvents();
  }
}

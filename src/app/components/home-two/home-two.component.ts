import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {EventModel} from "../../models/event.model";
import {Result} from "../../models/person.model";
import {DataServiceService} from "../../services/data-service.service";
import {NbWindowService} from "@nebular/theme";
import {environment} from "../../../environments/environment";
// @ts-ignore
import mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-home-two',
  templateUrl: './home-two.component.html',
  styleUrls: ['./home-two.component.scss']
})
export class HomeTwoComponent implements OnInit {
  map: mapboxgl.Map
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
        this.initiateMap(-93.99743536082856,44.14619841204489, )
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
    mapboxgl.accessToken = environment.mapbox.accessToken
    this.getEvents();
  }

  initiateMap(lng: any, lat: any,) {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/johnyoat/cl7xnvxev002614pfwczwqnvt',
      zoom: 16,
      center: [lng, lat]
    })

    this.isMap = false;



    this.map.addControl(new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true,
      showUserHeading: true
    }));



    this.events?.forEach(e=>{
      new mapboxgl.Marker({ color: 'black'})
        .setLngLat([e.lat, e.lng])
        .addTo(this.map);
    })
  }


}

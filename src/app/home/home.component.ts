import {AfterViewInit, Component, OnInit} from '@angular/core';

// @ts-ignore
import mapboxgl from 'mapbox-gl';
import {environment} from "../../environments/environment";
import {EventModel} from "../models/event.model";
import {DataServiceService} from "../services/data-service.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  map: mapboxgl.Map
  events: EventModel[] | undefined = []
  isMap = true
  isDataLoading = true


  eventObject: any | undefined = {}

  constructor(private dataService: DataServiceService) {
  }

  getEvents() {
    this.dataService.getEventsFrom(0, 0).subscribe(rpx => {
        this.events = rpx.data
      this.isDataLoading = false
        this.initiateMap(44.14619841204489, -93.99743536082856)
      }
    )
  }


  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapbox.accessToken
    this.getEvents();
  }

  clickEvent(event: EventModel) {
    this.eventObject = event
  }

  initiateMap(lat: any, lng: any,) {
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
        .setLngLat([e.location.coordinates[1], e.location.coordinates[0]])
        .addTo(this.map);
    })
  }
}

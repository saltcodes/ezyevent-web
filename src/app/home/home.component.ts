import {AfterViewInit, Component, OnInit} from '@angular/core';
// @ts-ignore
import mapboxgl from 'mapbox-gl';
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit,AfterViewInit {

  map: mapboxgl.Map
  events = [
    {name: "Hollwen Party", Day : 6, month: "Nov", location: "CSU"},
    {name: "Book Club Lunch", Day : 20, month: "Oct", location: "Front Desk"},
    {name: "Free Movie Show", Day : 11, month: "Jan", location: "Campus Hub"},
    {name: "CADSCOM 2022", Day : 16, month: "Mar", location: "In the snow"},
    {name: "Beunch for Techies", Day : 21, month: "JUN", location: "Parking Lot 5"},
    {name: "Jazz Dancing Lessons", Day : 31, month: "APR", location: "In your house?"},
    {name: "Bee movie free show", Day : 5, month: "JUL", location: "In the middle of the lake"},
  ]

  eventObject :any | undefined = {}
  constructor() { }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapbox.accessToken
  }



  clickEvent(index:any){
    this.eventObject = this.events[index]
  }

  ngAfterViewInit(): void {

    navigator.geolocation.getCurrentPosition((location)=>{
        this.initiateMap(location.coords.longitude,location.coords.latitude)
    },(err)=>{
      alert('Location permissions need to be accessed for this feature')
      this.initiateMap(50,50)

    })


  }


  initiateMap(lng: any,lat: any,){
    console.log(lat,lng)
    this.map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/johnyoat/cl7xnvxev002614pfwczwqnvt',
      zoom: 14,
      center: [lng,lat]
    })
  }

}

import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {ResponseObjectModel} from "../models/responseobject.model";
import {EventModel} from "../models/event.model";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  BASE_URL = "http://35.239.194.89:8081"

  constructor(private http:HttpClient) {

  }


  getEventsFrom(lng: number, lat: number){
    return this.http.get<ResponseObjectModel<EventModel[]>>(this.BASE_URL+"/events")
  }
}

import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ResponseObjectModel} from "../models/responseobject.model";
import {EventModel} from "../models/event.model";
import {PersonResponse} from "../models/person.model";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  BASE_URL = environment.SERVER_URL

  constructor(private http:HttpClient) {

  }


  getEventsFrom(lng: number, lat: number): Observable<ResponseObjectModel<EventModel[]>> {
    return this.http.get<ResponseObjectModel<EventModel[]>>(this.BASE_URL+"/events")
  }

  getAttendees():Observable<PersonResponse>{
    return this.http.get<PersonResponse>('https://randomuser.me/api/?results=100')
  }

  getCurrentCity():Observable<any>{
    return this.http.get('http://ipinfo.io/json')
  }
}

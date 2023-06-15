export interface Location {
  type: string;
  coordinates: number[];
}

export interface EventModel {
  id: string;
  name: string;
  summary: string;
  details: string;
  images: string[];
  lat: number;
  lng: number;
  price: number;
  date: number;
  locationName:String
  banner:string;
  eventType:EventType;
}


export interface EventType{
  id:string;
  name:string;
  icon:string;
}

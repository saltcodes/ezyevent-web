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
  location: Location;
  price: number;
  date: number;
  typeId: string;
  type: string;
  locationName:String
}

export interface Location {
  type: string;
  coordinates: number[];
}

export interface EventModel {
  id: string
  name: string
  summary: string
  details: string
  images: string[]
  banner: string
  lat: number
  lng: number
  locationName: string
  price: number
  date: number
  orgId: string
  categoryID: string
  category: Category
}

export interface Category {
  id: string
  name: string
  iconUrl: string
}


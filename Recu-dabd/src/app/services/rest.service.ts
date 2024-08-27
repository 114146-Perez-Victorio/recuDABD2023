import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciudad, Trip } from '../clases/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  constructor(private http:HttpClient) {}

  private urlCities ='http://localhost:3200/cities';
  private apiUrl = 'http://localhost:3200/';
  private urlEditViaje = 'http://localhost:3200/trips'

  public getCiudades(): Observable<Ciudad[]> {
    return this.http.get<Ciudad[]>(this.urlCities);
  }
  public getViajes(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.apiUrl + 'trips');
  }


  public actualizarViaje(trip: Trip,id:string): Observable<Trip> {
    if (!trip.id) {
      console.error('El ID del viaje es undefined');
      console.log('ID del viaje no válido');
    }
    let tripID =id; 
    let url = `${this.urlEditViaje}/${tripID}`;
    return this.http.put<Trip>(url, trip);
  }

  guardarViaje(trip:Trip){
    let viaje = trip
    console.log(trip);
    
  }

}

import { Component } from '@angular/core';
import { RestService } from '../services/rest.service';
import { Ciudad, Trip } from '../clases/Ciudad';
import { ViajeService } from '../services/viaje.service';

@Component({
  selector: 'ba-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent {
  trips: Trip[] = [];
  cities: Ciudad[] = [];
  viajeSeleccionado!: Trip; 

  constructor(private rest: RestService, private viaje:ViajeService) {}

  ngOnInit(): void {
    this.getTrips();
    this.getCities();
  }

  editarViaje(trip: Trip): void {
    this.viajeSeleccionado = { ...trip }; 
    console.log(this.viajeSeleccionado);
    this.rest.guardarViaje(this.viajeSeleccionado)
    this.viaje.setViaje(trip);
  }


  getTrips(): void {
    this.rest.getViajes()
      .subscribe(trips => this.trips = trips);
  }

  getCities(): void {
    this.rest.getCiudades()
      .subscribe(cities => this.cities = cities);
  }

  getNombreCiudad(id: string): string {
    let ciudad = this.cities.find(ciudades => ciudades.id === id);
    return ciudad ? ciudad.name : ""
  }


}



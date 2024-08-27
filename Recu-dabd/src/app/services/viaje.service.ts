import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Trip } from '../clases/Ciudad';

@Injectable({
  providedIn: 'root'
})
export class ViajeService {

  constructor() { }
  private tripToEditSubject = new BehaviorSubject<Trip | null>(null);
  tripToEdit$: Observable<Trip | null> = this.tripToEditSubject.asObservable();

  setViaje(trip: Trip) {
    this.tripToEditSubject.next(trip);
  }
}

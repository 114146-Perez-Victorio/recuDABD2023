import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ciudad, Stop, Trip } from '../clases/Ciudad';
import { RestService } from '../services/rest.service';
import { ViajeService } from '../services/viaje.service';

@Component({
  selector: 'ba-trip-edit',
  templateUrl: './trip-edit.component.html',
  styleUrls: ['./trip-edit.component.css']
})
export class TripEditComponent {
  formViaje: FormGroup;
  ciudades: Ciudad[] = [];
  paradas: Stop[] = [];
  selectedTrip!: Trip; 

  constructor(
    private formBuilder: FormBuilder,
    private rest: RestService,
    private viaje:ViajeService
  ) {
    this.formViaje = this.formBuilder.group({
      id:[''],
      originId: ['', Validators.required],
      destinationId: ['', Validators.required],
      departureDate: ['', Validators.required],
      departureTime: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
            paradas: this.formBuilder.array([])  // Inicializar el FormArray

    });
  }



  ngOnInit(): void {
    this.loadCiudades();
    if (this.selectedTrip) {
      this.cargarViaje(this.selectedTrip);
    }
    this.viaje.tripToEdit$.subscribe((trip) => {
      if (trip) {
        this.cargarViaje(trip);
      }
    });
  }

  onSubmit() {
    if (this.formViaje.valid) {
      let updatedTrip: Trip = { ...this.selectedTrip, ...this.formViaje.value };
  
      if (!updatedTrip.id) {
        console.error('El ID del viaje es undefined');
        return;
      }
  
      this.rest.actualizarViaje(updatedTrip, updatedTrip.id).subscribe(
        () => {
          console.log('Viaje actualizado con éxito');
          alert("Viaje actualizado con exito!")
        },
        (error) => {
          console.error('Error al actualizar el viaje', error);
        }
      );
    } else {
      console.log('Viaje invalido');
    }
  }
  
  cancelarEdicion() {
    this.formViaje.reset()
  }

  loadCiudades() {
    this.rest.getCiudades().subscribe(
      (ciudades) => {
        this.ciudades = ciudades;
      },
      (error) => {
        console.error('Error al cargar las ciudades', error);
      }
    );
  }

  private cargarViaje(trip: Trip) {
    this.formViaje.patchValue({
      id:trip.id,
      originId: trip.originId,
      destinationId: trip.destinationId,
      departureDate: trip.departureDate,
      departureTime: trip.departureTime,
      price: trip.price,
    });

  }

}

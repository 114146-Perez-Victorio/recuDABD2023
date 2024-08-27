import { Component,Input,Output,EventEmitter} from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ciudad, Stop, Trip } from '../clases/Ciudad';
import { RestService } from '../services/rest.service';
import { ViajeService } from '../services/viaje.service';

@Component({
  selector: 'ba-trip-stop-edit',
  templateUrl: './trip-stop-edit.component.html',
  styleUrls: ['./trip-stop-edit.component.css']
})
export class TripStopEditComponent {

  @Input() arrayForm!: FormArray;
  @Output() addStop: EventEmitter<any> = new EventEmitter<any>();
  formParada!: FormGroup;
  viaje!:Trip;

  constructor(private formBuilder: FormBuilder,private rest:RestService) {}

  ngOnInit() {
    this.initForm();
  }

   initForm() {
    this.arrayForm = this.formBuilder.array([]);
  }

  onSubmit() {
    if (this.formParada.valid) {
      this.addStop.emit(this.formParada.value);
      this.formParada.reset(); 
    }
  }
  agregarParada() {
    let nuevaParada ={
      location:this.formParada.value.location,
      time:this.formParada.value.time,
      stopTime:this.formParada.value.stopTime,
    };

    this.viaje.stops.push(nuevaParada)

    this.rest.actualizarViaje
    
    this.arrayForm.push(nuevaParada);
    console.log(nuevaParada);
  }
}

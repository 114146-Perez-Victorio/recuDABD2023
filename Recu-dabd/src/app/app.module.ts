import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripEditComponent } from './trip-edit/trip-edit.component';
import { TripStopEditComponent } from './trip-stop-edit/trip-stop-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  { component: TripListComponent, path: 'list-trip' },
  { component: TripEditComponent, path: 'trip/edit' },
  { component: TripStopEditComponent, path: 'trip/stop' }
];

@NgModule({
  declarations: [
    AppComponent,
    TripListComponent,
    TripEditComponent,
    TripStopEditComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

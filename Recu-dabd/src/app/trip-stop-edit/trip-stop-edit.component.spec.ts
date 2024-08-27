import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TripStopEditComponent } from './trip-stop-edit.component';

describe('TripStopEditComponent', () => {
  let component: TripStopEditComponent;
  let fixture: ComponentFixture<TripStopEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TripStopEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TripStopEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

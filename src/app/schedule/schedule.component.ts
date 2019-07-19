import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  public trips: Array<Trip> = [];
  public tripAdditionForm: FormGroup;

  public departureTime = new FormControl('', [Validators.required]);
  public arrivalTime = new FormControl('', [Validators.required]);
  public departureCity = new FormControl('', [Validators.required]);
  public arrivalCity = new FormControl('', [Validators.required]);
  public price = new FormControl('', [Validators.required]);

  constructor(private formBuilder: FormBuilder) {
  }

  public ngOnInit(): void {
    this.tripAdditionForm = this.formBuilder.group({
      departureTime: this.departureTime,
      arrivalTime: this.arrivalTime,
      departureCity: this.departureCity,
      arrivalCity: this.arrivalCity,
      price: this.price,
    });
  }

  public addTrip(): void {
    console.log(this.tripAdditionForm);
    const trip = new Trip(this.tripAdditionForm.value);
    if (this.tripAdditionForm.invalid) {
      return;
    }
    this.trips.push(trip);
  }

  public deleteTrip(index: number): void {
    this.trips.splice(index, 1);
  }
}

class Trip {
  public departureTime: string;
  public arrivalTime: string;
  public departureCity: string;
  public arrivalCity: string;
  public price: number;

  constructor(tripAdditionFormValue) {
    this.departureTime = tripAdditionFormValue.departureTime;
    this.arrivalTime = tripAdditionFormValue.arrivalTime;
    this.departureCity = tripAdditionFormValue.departureCity;
    this.arrivalCity = tripAdditionFormValue.arrivalCity;
    this.price = tripAdditionFormValue.price;
  }
}

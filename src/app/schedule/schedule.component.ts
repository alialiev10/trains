import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {
  trips: Array <Trip> = [];
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  arrivalCity: string;
  price: number;

  constructor() {
  }

  ngOnInit() {
  }

  addTrip() {
    const trip = new Trip(this.departureTime, this.arrivalTime, this.departureCity, this.arrivalCity, this.price);
    this.trips.push(trip);
  }

}

class Trip {
  departureTime: string;
  arrivalTime: string;
  departureCity: string;
  arrivalCity: string;
  price: number;

  constructor(departureTime: string, arrivalTime: string, departureCity: string,
              arrivalCity: string, price: number) {
    this.departureTime = departureTime;
    this.arrivalTime = arrivalTime;
    this.departureCity = departureCity;
    this.arrivalCity = arrivalCity;
    this.price = price;
  }
}

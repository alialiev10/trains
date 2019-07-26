import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {LocalStorageService} from '../../services/local-storage/local-storage.service';
import {MatDialog} from '@angular/material';
import {ConfirmationPopupComponent} from '../../components/confirmation-popup/confirmation-popup.component';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit, OnDestroy {

  @ViewChild('tripAdditionNgForm', {static: false}) private tripAdditionNgForm: NgForm;

  public trips: Array<Trip> = [];
  public tripAdditionForm: FormGroup;

  public departureTime = new FormControl('', [Validators.required]);
  public arrivalTime = new FormControl('', [Validators.required]);
  public departureCity = new FormControl('', [Validators.required]);
  public arrivalCity = new FormControl('', [Validators.required]);
  public price = new FormControl('', [Validators.required]);


  constructor(private formBuilder: FormBuilder,
              private ls: LocalStorageService,
              private dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.tripAdditionForm = this.formBuilder.group({
      departureTime: this.departureTime,
      arrivalTime: this.arrivalTime,
      departureCity: this.departureCity,
      arrivalCity: this.arrivalCity,
      price: this.price,
    });
    this.trips = this.ls.get('trips') || [];

    window.onbeforeunload = () => this.ls.set('trips', this.trips);
  }

  public ngOnDestroy(): void {
    this.ls.set('trips', this.trips);
  }

  public addTrip(): void {
    const trip = new Trip(this.tripAdditionForm.value);
    if (this.tripAdditionForm.invalid) {
      return;
    }
    this.trips.push(trip);
    this.tripAdditionForm.reset();
    this.tripAdditionNgForm.resetForm();
  }

  public deleteTrip(index: number): void {
    const dialogRef = this.dialog.open(ConfirmationPopupComponent, {data: {action: 'удалить рейс'}});
    dialogRef.afterClosed()
      .subscribe(res => {
        if (res) {
          this.trips.splice(index, 1);
        }
      });
    // this.trips.splice(index, 1);
  }

  public editTrip(trip: Trip): void {
    let isHasUnfilledField: boolean;
    if (trip.isEditable) {
      for (const key of Object.keys(trip)) {
        if (trip[key] === '') {
          isHasUnfilledField = true;
          break;
        }
      }
    }

    if (trip.isEditable && isHasUnfilledField) {
      return;
    }

    trip.isEditable = !trip.isEditable;
  }
}

class Trip {
  public departureTime: string;
  public arrivalTime: string;
  public departureCity: string;
  public arrivalCity: string;
  public price: number;
  public isEditable: boolean;

  constructor(tripAdditionFormValue) {
    this.departureTime = tripAdditionFormValue.departureTime;
    this.arrivalTime = tripAdditionFormValue.arrivalTime;
    this.departureCity = tripAdditionFormValue.departureCity;
    this.arrivalCity = tripAdditionFormValue.arrivalCity;
    this.price = tripAdditionFormValue.price;
  }
}

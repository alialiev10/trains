import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { HomeComponent } from './pages/home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialProviderModule} from './material-provider.module';
import {MatDialogModule} from '@angular/material';
import { ConfirmationPopupComponent } from './components/confirmation-popup/confirmation-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HomeComponent,
    ConfirmationPopupComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialProviderModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfirmationPopupComponent]
})
export class AppModule { }

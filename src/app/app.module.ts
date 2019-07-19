import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HomeComponent } from './home/home.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialProviderModule} from './material-provider.module';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleComponent,
    HomeComponent,
],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MaterialProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

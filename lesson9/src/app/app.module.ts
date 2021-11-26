import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RandomComponent } from './component/random/random.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    RandomComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

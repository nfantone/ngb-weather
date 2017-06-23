import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';
import { WeatherGridComponent } from './weather-grid/weather-grid.component';
import { WeatherService } from './weather.service';
import { WeatherIconPipe } from './weathericon.pipe';

@NgModule({
  imports: [
    HttpModule,
    CommonModule,
    IonicModule
  ],
  exports: [
    WeatherIconPipe,
    WeatherGridComponent
  ],
  declarations: [
    WeatherIconPipe,
    WeatherGridComponent
  ],
  providers: [
    WeatherService
  ]
})
export class WeatherModule { }

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { LocationModule } from '../../location/location.module';
import { WeatherModule } from '../../weather/weather.module';

@NgModule({
  declarations: [
    HomePage
  ],
  imports: [
    WeatherModule,
    LocationModule,
    IonicPageModule.forChild(HomePage)
  ],
  exports: [
    HomePage
  ]
})
export class HomePageModule {}

import { NgModule } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationService } from './location.service';
import { GeocodeService } from './geocode.service';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    LocationService,
    GeocodeService,
    Geolocation
  ]
})
export class LocationModule { }

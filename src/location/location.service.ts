import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Geolocation } from '@ionic-native/geolocation';
import { toGeoLocation, GeoLocation } from './location';

import 'rxjs/add/observable/fromPromise';

@Injectable()
export class LocationService {

  constructor(private geolocation: Geolocation) { }

  getCurrentLocation(): Observable<GeoLocation> {
    return Observable.fromPromise(this.geolocation.getCurrentPosition())
      .map(toGeoLocation);
  }
}

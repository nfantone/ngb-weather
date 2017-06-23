import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GeoLocation } from '../location/location';
import { Weather } from './weather';
import 'rxjs/add/operator/map';

/**
 * Weather service API root URL.
 * DarkSky requests should be proxied to avoid CORS errors.
 *
 * @see https://darksky.net/dev/docs/faq#cross-origin
 * @type {String}
 */
const API_ROOT = '/api/forecast';

@Injectable()
export class WeatherService {
  constructor(private http: Http) {
  }

  getWeather(loc: GeoLocation, units: string = 'si'): Observable<Weather> {
    return this.http.get(`${API_ROOT}/${loc.lat},${loc.lng}?units=${units}`)
      .map((res) => res.json());
  }
}

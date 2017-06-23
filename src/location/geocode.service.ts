import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { GeoLocation } from './location';
import 'rxjs/add/operator/map';

/**
 * Google Maps root geocode API URL.
 * @type {String}
 */
const API_ROOT = 'https://maps.googleapis.com/maps/api/geocode/json';

/**
 * Developer's Google API personal key.
 * You should add your own valid key here.
 * @type {String}
 */
const API_KEY = '{YOUR_API_KEY}';

@Injectable()
export class GeocodeService {

  constructor(private http: Http) { }

  getAddress(loc: GeoLocation): Observable<string> {
    return this.http.get(`${API_ROOT}?latlng=${loc.lat},${loc.lng}&key=${API_KEY}`)
      .map((res) => res.json())
      .map((data) => data.results[0].formatted_address);
  }
}

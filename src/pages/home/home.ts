import { Component, ChangeDetectionStrategy } from '@angular/core';
import {
  AlertController, IonicPage, LoadingController, Refresher
} from 'ionic-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import { Subject } from 'rxjs/Subject';
import { GeocodeService } from '../../location/geocode.service';
import { GeoLocation } from '../../location/location';
import { LocationService } from '../../location/location.service';
import { Weather } from '../../weather/weather';
import { WeatherService } from '../../weather/weather.service';

import 'rxjs/add/operator/first';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/switchMap';

/**
 * Default address name shown on startup.
 * @type {String}
 */
const DEFAULT_ADDRESS = 'Current location';

@IonicPage()
@Component({
  selector: 'ngb-page-home',
  templateUrl: 'home.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
  weather$: Subject<Weather>;
  addresse$: Subject<string>;

  constructor(
    private geocodeService: GeocodeService,
    private weatherService: WeatherService,
    private locationService: LocationService,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) {
    this.weather$ = new ReplaySubject<Weather>();
    this.addresse$ = new BehaviorSubject<string>(DEFAULT_ADDRESS);
  }

  fetchAddress(loc: GeoLocation) {
    this.geocodeService.getAddress(loc)
      .first()
      .subscribe((address) => this.addresse$.next(address));
  }

  fetchWeather(fn: () => void) {
    this.locationService.getCurrentLocation()
      .do((loc) => this.fetchAddress(loc))
      .switchMap((loc) => this.weatherService.getWeather(loc))
      .first()
      .finally(fn)
      .subscribe(
        (weather) => this.weather$.next(weather),
        (err) => this.showAlert(err.message || err)
      );
  }

  ionViewDidLoad() {
    const loader = this.loadingCtrl.create({
      content: 'Loading weather data...'
    });
    return loader.present()
      .then(() => this.fetchWeather(() => loader.dismiss()));
  }

  doRefresh(refresher: Refresher) {
    this.fetchWeather(() => refresher.complete());
  }

  showAlert(message: string = 'An unexpected error occurrred') {
    const alert = this.alertCtrl.create({
      message,
      buttons: ['Ok']
    });
    return alert.present();
  }
}

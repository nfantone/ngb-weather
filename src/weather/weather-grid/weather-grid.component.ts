import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Weather } from '../weather';

@Component({
  selector: 'ngb-weather-grid',
  templateUrl: 'weather-grid.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherGridComponent {
  @Input() data: Weather;
}

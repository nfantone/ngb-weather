import { Pipe, PipeTransform } from '@angular/core';

const DEFAULT_ICON = 'sunny';
const FORECASTS_TO_ICONS = {
  'clear-day': 'sunny',
  'clear-night': 'moon',
  'rain': 'rainy',
  'snow': 'snow',
  'sleet': 'snow',
  'wind': 'cloudy',
  'fog': 'cloudy',
  'cloudy': 'cloudy',
  'partly-cloudy-day': 'partly-sunny',
  'partly-cloudy-night': 'cloudy-night'
};

@Pipe({ name: 'ngbWeathericon' })
export class WeatherIconPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    return FORECASTS_TO_ICONS[value] || DEFAULT_ICON;
  }
}

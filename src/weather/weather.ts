interface Currently {
  time: number;
  summary: string;
  icon: string;
  nearestStormDistance: number;
  nearestStormBearing: number;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  windSpeed: number;
  windBearing: number;
  visibility: number;
  cloudCover: number;
  pressure: number;
  ozone: number;
}

interface Datum {
  time: number;
  precipIntensity: number;
  precipProbability: number;
}

interface Minutely {
  summary: string;
  icon: string;
  data: Datum[];
}

interface Datum2 {
  time: number;
  summary: string;
  icon: string;
  precipIntensity: number;
  precipProbability: number;
  temperature: number;
  apparentTemperature: number;
  dewPoint: number;
  humidity: number;
  windSpeed: number;
  windBearing: number;
  visibility: number;
  cloudCover: number;
  pressure: number;
  ozone: number;
}

interface Hourly {
  summary: string;
  icon: string;
  data: Datum2[];
}

interface Datum3 {
  time: number;
  summary: string;
  icon: string;
  sunriseTime: number;
  sunsetTime: number;
  moonPhase: number;
  precipIntensity: number;
  precipIntensityMax: number;
  precipProbability: number;
  temperatureMin: number;
  temperatureMinTime: number;
  temperatureMax: number;
  temperatureMaxTime: number;
  apparentTemperatureMin: number;
  apparentTemperatureMinTime: number;
  apparentTemperatureMax: number;
  apparentTemperatureMaxTime: number;
  dewPoint: number;
  humidity: number;
  windSpeed: number;
  windBearing: number;
  visibility: number;
  cloudCover: number;
  pressure: number;
  ozone: number;
  precipIntensityMaxTime?: number;
  precipType: string;
}

interface Daily {
  summary: string;
  icon: string;
  data: Datum3[];
}

interface Alert {
  title: string;
  time: number;
  expires: number;
  description: string;
  uri: string;
}

interface Flags {
  sources: string[];
  'darksky-stations': string[];
  'lamp-stations': string[];
  'isd-stations': string[];
  'madis-stations': string[];
  units: string;
}

export declare interface Weather {
  latitude: number;
  longitude: number;
  timezone: string;
  offset: number;
  currently: Currently;
  minutely: Minutely;
  hourly: Hourly;
  daily: Daily;
  alerts: Alert[];
  flags: Flags;
}

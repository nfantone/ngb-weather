import { Geoposition } from '@ionic-native/geolocation';

export declare interface GeoLocation {
  lat: number;
  lng: number;
  timestamp?: number;
}

export const toGeoLocation = (pos: Geoposition): GeoLocation => {
  const { latitude: lat, longitude: lng } = pos.coords;
  return { lat, lng, timestamp: pos.timestamp };
};

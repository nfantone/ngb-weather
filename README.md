# ngb-weather

> Live coding demo from [ng-baires][ngbaires] June 2017 meetup @ [Globant][globant], Buenos Aires, ARG

A simple Ionic weather app using [DarkSky API][darksky], Cordova [Geolocation plugin][geolocation] and [Google Maps geocoding API][gmaps].

## Installation

**Clone** the repository and **install** dependencies.

```sh
# Install global dependencies
npm i -g ionic cordova

# Clone the repository
git clone https://github.com/nfantone/ngb-weather.git
cd ngb-weather

# Install dependencies
npm i
```

## Configuration

You'll need both [DarkSky][darksky-key] and [Google][google-key] API's keys to run this project.

- _With the **DarkSky API** key_

Setup a proxy by adding the following to `ionic.config.json`.

```json
  "proxies": [
    {
      "path": "/api/forecast",
      "proxyUrl": "https://api.darksky.net/forecast/{YOUR_API_KEY}"
    }
  ]
```

- _With the **Google API** key_

Edit and replace `{YOUR_API_KEY}` with the proper value in `geocode.service.ts`.

```ts
/**
 * Developer's Google API personal key.
 * You should add your own valid key here.
 * @type {String}
 */
const API_KEY = '{YOUR_API_KEY}'; // <-- Replace this
```

## Run the application

Serve the app using the `ionic` CLI.

```sh
# Run the application in a browser
ionic serve [-l]
```

## Known issues

Due to [security reasons][darksky-cors], [DarkSky][darksky] does not allow CORS requests. The proxy configured in `ionic.config.json` is meant to help during development and _only_ works while serving the app using the CLI (i.e.: `ionic serve`). It **won't work on mobile devices, emulators or Ionic View**. You should set up your own server-side proxy in order to be able to make calls to the forecast API.

## Credits

Credits to [Chris Griffith][chrisgriffith] author of _[Mobile App Development with Ionic 2][mobile-app-development]_ and ng-conf workshop tutor for the original app idea.

### LICENSE
MIT

[ngbaires]: https://www.meetup.com/ng-baires/
[globant]: https://www.globant.com/
[darksky]: https://darksky.net/dev/
[geolocation]: https://cordova.apache.org/docs/en/latest/reference/cordova-plugin-geolocation/
[gmaps]: https://developers.google.com/maps/documentation/geocoding/intro
[darksky-key]: https://darksky.net/dev/register
[google-key]: https://developers.google.com/maps/documentation/geocoding/get-api-key
[darksky-cors]: https://darksky.net/dev/docs/faq#cross-origin
[chrisgriffith]: https://github.com/chrisgriffith/
[mobile-app-development]: http://shop.oreilly.com/product/0636920044710.do

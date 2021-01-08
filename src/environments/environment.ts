// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

import firebase from "firebase";

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBVuP7M9q-i8xWGat-jJWYZg0Vl_bju9n0",
    authDomain: "angular-y-threejs.firebaseapp.com",
    databaseURL: "https://angular-y-threejs-default-rtdb.firebaseio.com",
    projectId: "angular-y-threejs",
    storageBucket: "angular-y-threejs.appspot.com",
    messagingSenderId: "722474879172",
    appId: "1:722474879172:web:ebc9fde7fbf5735cb96191",
    measurementId: "G-Q6QGVGWRGX"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

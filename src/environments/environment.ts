// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  itemEndpoint: 'https://csse-backend.herokuapp.com/items',
  purchaseRequestEndpoint: 'https://csse-backend.herokuapp.com/requests',
  purchaseOrderEndpoint: 'https://csse-backend.herokuapp.com/orders',
  supplierEndpoint: 'https://csse-backend.herokuapp.com/suppliers',
  approvePurchaseRequestsEndpoint: 'https://csse-backend.herokuapp.com/requests/approve',
  loginUrl: 'https://csse-backend.herokuapp.com/login',
  registerUrl: 'https://csse-backend.herokuapp.com/users/signup',
  listUrl: 'https://procurement-system.herokuapp.com/users/list',
  updateUrl: 'https://procurement-system.herokuapp.com/users/update',
  deleteUrl: 'https://procurement-system.herokuapp.com/users/deactivate'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

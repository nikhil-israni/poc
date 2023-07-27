import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer
  } from '@ngrx/store';
  import { localStorageSync } from 'ngrx-store-localstorage';
  import { environment } from '../environments/environments';
  import * as CustomerListingReducers from './reducers/customer-listing/customer-listing.reducers';
 






  export interface State {

    CustomerListing:CustomerListingReducers.State


  }

  export const reducers: ActionReducerMap<State> = {
    CustomerListing : CustomerListingReducers.reducer,
   

  };

  const reducerKeys = ['usernameToUserInformation'];
  export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: reducerKeys})(reducer);
  }

  export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {

      return reducer(state, action);
    };
  }


  export const metaReducers: MetaReducer<State>[] = !environment.production ? [debug, localStorageSyncReducer] : [localStorageSyncReducer];

  export * from './selectors/index';





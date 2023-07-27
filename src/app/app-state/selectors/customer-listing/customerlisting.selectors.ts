import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as reducer from '../../reducers/customer-listing/customer-listing.reducers'

const state = createFeatureSelector<reducer.State>('CustomerListing');


export const selectLoadingCustomerListing = createSelector(
  state,
  state => state.isLoading
);

export const selectStatesCustomerListing= createSelector(
  state,
  state => state
);

export const selectStatesCustomerListingBody= createSelector(
  state,
  state => state.body
);

export const selectStatesCustomerListingData= createSelector(
  state,
  state => state.CustomerListing
);

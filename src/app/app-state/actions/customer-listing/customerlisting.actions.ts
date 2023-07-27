import { createAction, props } from '@ngrx/store';


export const CustomerListing= createAction(
  '[CustomerListing] Get CustomerListing',
  props<any>()
);

export const CustomerListingSuccess= createAction(
  '[CustomerListing] Get CustomerListing Success',
  props<any>()
);

export const CustomerListingFailure= createAction(
  '[CustomerListing] Get CustomerListing Failure',
  props<any>()
);

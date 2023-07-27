import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../../actions';
import { CustomerListing,CustomerListingBody } from '../../types';

export interface State {
    CustomerListing: CustomerListing[];
  defaultPreferredWorkshop: CustomerListing[];
  isLoading: boolean;
  isLoadingSuccess: boolean;
  isLoadingFailure: string;
  body: CustomerListingBody;
}

export const initialState: State = {
    CustomerListing: [],
  defaultPreferredWorkshop:[],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: '',
  body:{
  },
};

const funReducer = createReducer(
  initialState,
  on(actions.CustomerListing, (state,action) => ({...state, isLoading: true})),
  on(actions.CustomerListingSuccess, (state, result) =>{
    return{
      ...state,
      defaultPreferredWorkshop: result.response,
      CustomerListing: result.response,
      isLoading: false,
      isLoadingSuccess: true
    }}),
  on(actions.CustomerListingFailure, (state, result) => ({
      ...state,
      CustomerListing: [],
      isLoading: false,
      isLoadingSuccess: false,
      isLoadingFailure:result.error
  })),
);

export function reducer(state: State | undefined, action: Action): any {
  return funReducer(state, action);
}


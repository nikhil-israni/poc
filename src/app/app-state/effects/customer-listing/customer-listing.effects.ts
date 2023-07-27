import { UsersService } from './../../../service/users.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, exhaustMap, catchError, withLatestFrom } from 'rxjs/operators';
import * as allActions  from '../../actions/customer-listing/customerlisting.actions';


@Injectable()
export class CustomerListingEffects {
    constructor(
        private actions$: Actions,
        private UserService: UsersService,
        private readonly store: Store,
    ){ }
    CustomerListing$ = createEffect(() =>
    this.actions$.pipe(
      ofType(allActions.CustomerListing),
    exhaustMap(action =>
    this.UserService.CustomerList({body:action}).pipe(
    map(response =>
        {
      return allActions.CustomerListingSuccess({response})
          }),
          catchError((error: any) => of(allActions.CustomerListingFailure(error))))
      )
    )
  );

}

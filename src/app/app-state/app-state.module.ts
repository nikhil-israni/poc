import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import{EffectsModule} from '@ngrx/effects'
import { reducers, metaReducers } from './index';
import { CustomerListingEffects } from './effects/customer-listing/customer-listing.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot([
      CustomerListingEffects
    ]),
    
  ],
})
export class AppStateModule { }

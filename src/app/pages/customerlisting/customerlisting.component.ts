import { Component, OnInit, Pipe } from '@angular/core';
import { Router } from '@angular/router';
import * as actions from '../../app-state/actions/customer-listing/customerlisting.actions';
import * as fromRoot from 'src/app/app-state';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { SearchfilterPipe } from '../../searchfilter.pipe';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-customerlisting',
  templateUrl: './customerlisting.component.html',
  styleUrls: ['./customerlisting.component.css']
})

export class CustomerlistingComponent {
  searchtext: string = '';
  displayedColumns = ['id', 'name', 'email', 'gender','status'];
  dataSource = new MatTableDataSource<Element>;

  destroy$: Subject<boolean> = new Subject<boolean>();
  customerlists: any;
  allnewdata: any;
  customers:any;
  newArr: any;
  public searchForm: any;
  constructor(private readonly store: Store,
    public http: HttpClient,private router:Router,
   
    ) {

     
    this.CustomerList()

    
  }
  CustomerList(){

    
    this.store
    .select(fromRoot.selectStatesCustomerListingData)
    .pipe(takeUntil(this.destroy$))
    .subscribe((data: any) => {
  this.customers=data;
  this.dataSource=data;
  console.log(data,'gffgf5')

     
    
 
   })
 
    this.store.dispatch(
      actions.CustomerListing({}))
  }
  // applyFilter() {
  //   this.dataSource.data = this.searchfilter.transform(this.allnewdata, this.searchtext, 'name');
  // }
  applyFilter(filterValue: string): void {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Convert to lowercase
    this.dataSource.filter = filterValue;
  }
}
export interface Element {
  name: string;
  id: number;
  gender: number;
  status: string;
  email: string ;
}

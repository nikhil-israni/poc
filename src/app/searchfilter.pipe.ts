import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from './pages/customer.interface';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(customers: Customer[], searchtext: string): Customer[]  {
    if (!customers || !searchtext) {
      return customers;
    }

    searchtext = searchtext.toLowerCase();
    return customers.filter(customer =>
      customer.name.toLowerCase().includes(searchtext)
    );

    // return customers.filter(item => item[columnName].toLowerCase().includes(searchtext));
  }
}
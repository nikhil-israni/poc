import { Component } from '@angular/core';
import { AuthenticatedGuard } from 'src/app/authentication.guard';

@Component({
  selector: 'app-header1',
  templateUrl: './header1.component.html',
  styleUrls: ['./header1.component.css']
})
export class Header1Component {
  constructor(private authGuard: AuthenticatedGuard){}
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout(): void {
    this.authGuard.logout();
  }
}

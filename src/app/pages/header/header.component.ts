import { Component } from '@angular/core';
import { AuthenticatedGuard } from 'src/app/authentication.guard';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authGuard: AuthenticatedGuard){}
  isDropdownOpen: boolean = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
  logout(): void {
    this.authGuard.logout();
  }
}

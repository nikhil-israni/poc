import { Injectable } from '@angular/core';
import { CanActivateFn,CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthguardServiceService } from './authguard-service.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate{
  constructor( private readonly router: Router) {}  
  

  canActivate() {
        //     const token = localStorage.getItem('token');
        // if (token) {
        //   return true;
        // } else {
        //   this.router.navigate(['/login']);
        //   return false;
        // }
        let formValue:any = localStorage.getItem('formdata')
        if (formValue) {
          return true;
        } else {
          // Redirect to the login page when not logged in
          return this.router.navigate(['/login']);
        }
      }
      logout(): void {
        // Clear user authentication data from localStorage or any other storage
        localStorage.removeItem('formdata');
        // Redirect to the login page after logout
        this.router.navigateByUrl('/login');
      }
}


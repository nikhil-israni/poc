import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private menuUrl = 'assets/menu.data.json';

  constructor(private http: HttpClient) { }

  getMenu(): Observable<any> {
    return this.http.get<any>(this.menuUrl).pipe(
      catchError(error => {
        console.error('Error fetching menu data:', error);
        return [];
      })
    );
  }
}

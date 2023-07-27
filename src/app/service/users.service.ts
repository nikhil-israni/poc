import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface MenuItem {
  title: string;
  link?: string;
  subMenu?: MenuItem[];
}


@Injectable({
  providedIn: 'root'
})

export class UsersService {
  basepath = `https://gorest.co.in/`
  constructor(private http:HttpClient) { }

  // https://dummy.restapiexample.com/api/v1/employees
  CustomerList(data:any){
    const { body} =  data;
    return this.http.get<any>(`${this.basepath}public/v2/users` );
  }

  private menuItems: MenuItem[] = [
    {
      title: 'Home',
      link: '/home',
    },
    {
      title: 'Data Management',
      link: '/about',
      subMenu: [
        { title: 'Customer-List', link: '/customerlisting' },
        { title: 'Team', link: '/about/team' },
      ],
    },
    {
      title: 'Contact',
      link: '/contact',
    },
  ];

  getMenuItems(): MenuItem[] {
    return this.menuItems;
  }
}

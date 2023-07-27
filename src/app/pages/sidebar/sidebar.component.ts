import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService ,MenuItem } from '../../service/users.service';
import { AuthenticatedGuard } from 'src/app/authentication.guard';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
   menuItems: MenuItem[] = [
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
  

  constructor(private menuService: UsersService) {}


  ngOnInit(): void {
    this.menuItems = this.menuService.getMenuItems();
  }
}
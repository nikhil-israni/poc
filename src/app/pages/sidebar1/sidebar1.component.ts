import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../service/menu.service';
@Component({
  selector: 'app-sidebar1',
  templateUrl: './sidebar1.component.html',
  styleUrls: ['./sidebar1.component.css']
})
export class Sidebar1Component implements OnInit {
  menuItems: any[] = [];

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(data => {
      this.menuItems = data.menu;
    });
  }
}

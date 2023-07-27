import { Component, Injectable } from '@angular/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  host: {
    '(window:resize)': 'onWindowResize($event)',
  },
})
export class DashboardComponent {

}

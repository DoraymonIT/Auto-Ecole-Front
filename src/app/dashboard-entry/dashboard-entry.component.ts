import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dashboard-entry',
  templateUrl: './dashboard-entry.component.html',
  styleUrls: ['./dashboard-entry.component.css']
})
export class DashboardEntryComponent implements OnInit {
  constructor() {
    this.hideMatBadge = false;
    this.ex = 3;
    this.aujourdHui = new Date();
  }

  aujourdHui: Date;

  opened: boolean;

  panelOpenState = false;
  hideMatBadge: boolean;
  ex: number;

  ngOnInit(): void {

  }


  time = new Date();

  badge() {
    this.hideMatBadge = true;
  }


}

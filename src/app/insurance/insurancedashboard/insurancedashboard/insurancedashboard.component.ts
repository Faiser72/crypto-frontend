import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurancedashboard',
  templateUrl: './insurancedashboard.component.html',
  styleUrls: ['./insurancedashboard.component.scss']
})
export class InsurancedashboardComponent implements OnInit {
  public number: number = 1000;
  constructor() { }

  ngOnInit() {
  }

}

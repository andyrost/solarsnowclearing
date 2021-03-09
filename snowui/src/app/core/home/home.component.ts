import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  snowdepth = 100;
  solartilt = 40;
  constructor() { }

  ngOnInit(): void {
    this.snowdepth = 100
    
  }
  getCalculation() {
    return this.snowdepth*this.solartilt
  }

}

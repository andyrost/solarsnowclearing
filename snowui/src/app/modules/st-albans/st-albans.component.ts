import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-st-albans',
  templateUrl: './st-albans.component.html',
  styleUrls: ['./st-albans.component.css']
})
export class StAlbansComponent implements OnInit {
  public stAlbansSiteName:string = "St. Albans";
  public stAlbansLat:string = constants.stAlbansLat;
  public stAlbansLong:string = constants.stAlbansLong;
  public monthlyKWH:any[] = [1342.168, 1948.689, 2553.084, 2446.53, 2556.132, 2645.14,
    2851.452, 2565.842, 2322.167, 1704.71, 1389.227, 1127.787]
  public energyPrice = 0.2095;
  constructor() { }

  ngOnInit(): void {
  }

}

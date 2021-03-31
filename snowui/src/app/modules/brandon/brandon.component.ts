import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/shared/constants';
import { icon } from 'src/app/shared/weatherIconMap';


@Component({
  selector: 'app-brandon',
  templateUrl: './brandon.component.html',
  styleUrls: ['./brandon.component.css']
})
export class BrandonComponent implements OnInit {
  public brandonSiteName: string = "Brandon";
  public brandonLat: string = constants.brandonLat;
  public brandonLong: string = constants.brandonLong;
  public monthlyKWH: any[] = [1540.484, 2212.643, 2794.123, 2644.573, 2751.145, 2839.637,
    3078.835, 2799.158, 2577.023, 1930.752, 1604.123, 1308.835]
  public energyPrice = 0.2095;
  public icon = icon;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}

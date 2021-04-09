import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { WeatherService } from 'src/app/shared/weather.service';
import { icon } from 'src/app/shared/weatherIconMap';

@Component({
  selector: 'app-barre',
  templateUrl: './barre.component.html',
  styleUrls: ['./barre.component.css']
})
export class BarreComponent implements OnInit {
  public barreSiteName: string = "Barre, Vermont";
  public barreLat: string = constants.barreLat
  public barreLong: string = constants.barreLong
  public expectedKWH: any = [1566.394, 2080.682, 2566.306, 2591.413, 2733.584, 2500.547,
    2774.19, 2643.132, 2366.113, 1810.858, 1347.22, 1084.758];
  public energyPrice = 0.2095;
  public icon = icon;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.weatherService.setWeather(this.barreLat,this.barreLong);
  }

}

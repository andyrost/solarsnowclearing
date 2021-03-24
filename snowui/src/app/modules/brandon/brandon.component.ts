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
  public brandonForecast: any;
  public icon = icon;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat="+constants.barreLat+"&lon="+constants.barreLong+"&units=imperial&appid="+constants.weatherKey).subscribe(
      res => {
        this.brandonForecast = res
        console.log(this.brandonForecast)
      }
    )
  }
  public getIconName(dayNum: number = 0, current:boolean = false){
    if (current == false){
      var iconValue = this.brandonForecast?.daily[dayNum].weather[0].icon
    }
    else{
      var iconValue = this.brandonForecast?.current.weather[0].icon
    }
    return this.icon.get(iconValue)
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/constants';
import { icon } from 'src/app/shared/weatherIconMap';

@Component({
  selector: 'app-barre',
  templateUrl: './barre.component.html',
  styleUrls: ['./barre.component.css']
})
export class BarreComponent implements OnInit {
  public barreForecast: any;
  public icon = icon;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat="+constants.barreLat+"&lon="+constants.barreLong+"&units=imperial&appid="+constants.weatherKey).subscribe(
      res => {
        this.barreForecast = res
        console.log(this.barreForecast)
      }
    )
    
  }
  public getIconName(dayNum: number = 0, current:boolean = false){
    if (current == false){
      var iconValue = this.barreForecast?.daily[dayNum].weather[0].icon
    }
    else{
      var iconValue = this.barreForecast?.current.weather[0].icon
    }
    return this.icon.get(iconValue)
  }

}

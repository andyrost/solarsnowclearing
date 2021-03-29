import { Component, OnInit,Input} from '@angular/core';
import { icon } from 'src/app/shared/weatherIconMap';
import { HttpClient } from '@angular/common/http';
import { constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-site-template',
  templateUrl: './site-template.component.html',
  styleUrls: ['./site-template.component.css']
})
export class SiteTemplateComponent implements OnInit {
  @Input() siteName: string | undefined;
  @Input() lat: string | undefined;
  @Input() long: string | undefined;

  public forecastData: any;
  public snowDepthArray: any = [];
  public icon = icon;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.lat+"&lon="+this.long+"&units=imperial&appid="+constants.weatherKey).subscribe(
      res => {
        this.forecastData = res
        console.log(this.forecastData)
        this.snowmeltForecast()
      }
    )
  }

  public getIconName(dayNum: number = 0, current:boolean = false){
    if (current == false){
      var iconValue = this.forecastData?.daily[dayNum].weather[0].icon
    }
    else{
      var iconValue = this.forecastData?.current.weather[0].icon
    }
    return this.icon.get(iconValue)
  }

  public snowmeltForecast(currentSnowDepth: any = 0){
    const ddCoeff = 2.74
    let snowDepth = currentSnowDepth

    for (let day of this.forecastData?.daily){
      if (day.snow){
        snowDepth += day.snow
      }
      let meanTempFTotal = day.temp.day + day.temp.night + day.temp.morn + day.temp.eve
      let meanTempF = meanTempFTotal/4
      let meanTempC = (meanTempF - 32)*(5/9)
      let snowMelt = meanTempC * ddCoeff
      if (snowMelt < 0) {
        snowMelt = 0
      }
      snowDepth -= snowMelt
      if (snowDepth < 0){
        snowDepth = 0
      }
      this.snowDepthArray.push(snowDepth)
    }

  }

}

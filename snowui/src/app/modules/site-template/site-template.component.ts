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
  public icon = icon;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat="+this.lat+"&lon="+this.long+"&units=imperial&appid="+constants.weatherKey).subscribe(
      res => {
        this.forecastData = res
        console.log(this.forecastData)
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

}

import { Component, OnInit,Input} from '@angular/core';
import { icon } from 'src/app/shared/weatherIconMap';
import { WeatherService } from 'src/app/shared/weather.service';

@Component({
  selector: 'app-site-template',
  templateUrl: './site-template.component.html',
  styleUrls: ['./site-template.component.css']
})
export class SiteTemplateComponent implements OnInit {
  @Input() siteName: string | undefined;
  @Input() monthlyKWH: any[] = [1,1,1,1,1]
  @Input() energyPrice: number = 0.2

  public forecastData: any;
  public snowDepthArray: any = [];
  public icon = icon;
  public roiArray: any[] = [];


  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.setForecastData();
  }

  public setForecastData() {
    this.weatherService.getWeather().subscribe(res => {
      this.forecastData = res
      this.snowmeltForecast(0,res)
      this.setDayROIArray();
    })
  }

  public getIconName(dayNum: number = 0, current:boolean = false){
    if (current == false){
      var iconValue = this.forecastData?.daily[dayNum].weather[0].icon
    }
    else{
      var iconValue = this.forecastData?.current?.weather[0]?.icon
    }
    return this.icon.get(iconValue)
  }

  public getDayIdealizedRevenue(date: number) {
    let dateObj = new Date(date*1000)
    let month = dateObj.getMonth()
    return this.monthlyKWH[month] * this.energyPrice
  }

  public setDayROIArray() {
    this.roiArray = []
    for (let i=0; i<8;i++){
      let dayROI:number = 0
      if (this.snowDepthArray[i] < 76.2){
        dayROI = -700
      }
      else {
        dayROI = -1100
      }
      for (let j=i; j<(i+8);j++){
        if (j<8) {
          dayROI += this.getDayExpectedRevenue(this.forecastData?.daily[j].dt, this.snowDepthArray[j]-this.snowDepthArray[i]) -
            this.getDayExpectedRevenue(this.forecastData?.daily[j].dt, this.snowDepthArray[j])
        }
      }
      this.roiArray.push(dayROI)
    }

  }

  public getDayExpectedRevenue(date: number, snowDepth: number) {
    if (snowDepth < 0){
      snowDepth = 0
    }
    let dateObj = new Date(date*1000)
    let month = dateObj.getMonth()
    let idealRevenue = this.monthlyKWH[month] * this.energyPrice
    let sunLoss = 0
    if (snowDepth >=0 ) {
      sunLoss = Math.sqrt(0.04*snowDepth)
    }
    if (snowDepth >= 20) {
      sunLoss = (1/800)*snowDepth + 0.875
    }
    if (snowDepth >= 100) {
      sunLoss = 1
    }
    return idealRevenue - sunLoss*idealRevenue
  }

  public getWarningClass(snowdepth:number){
    if (snowdepth>20){
      return 'day-warning'
    }
    else if (snowdepth>10){
      return 'day-watch'
    }
    else{
      return 'day-normal'
    }
  }

  public getROIClass(roi: number){
    if (roi > 140) {
      return 'day-success'
    }
    else{
      return 'day-normal'
    }
  }

  public snowmeltForecast(currentSnowDepth: any = 0, forecastData: any) {
    const ddCoeff = 2.74
    let snowDepth = currentSnowDepth
    this.snowDepthArray = []

    for (let day of forecastData?.daily){
      if (day.snow){
        snowDepth += day.snow
      }
      let meanTempFTotal = day.temp.day + day.temp.night + day.temp.morn + day.temp.eve
      let meanTempF = meanTempFTotal/4
      let meanTempC = (meanTempF - 32)*(5/9)
      let snowMelt = meanTempC * ddCoeff * 3
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

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-barre',
  templateUrl: './barre.component.html',
  styleUrls: ['./barre.component.css']
})
export class BarreComponent implements OnInit {
  public barreForecast: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat="+constants.barreLat+"&lon="+constants.barreLong+"&units=imperial&appid="+constants.weatherKey).subscribe(
      res => {
        this.barreForecast = res
        console.log(this.barreForecast)
      }
    )
    
  }

}

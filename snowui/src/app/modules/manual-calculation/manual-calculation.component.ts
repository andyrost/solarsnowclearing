import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { constants } from 'src/app/shared/constants';
import { WeatherService } from 'src/app/shared/weather.service';
import { SiteTemplateComponent } from '../site-template/site-template.component';

@Component({
  selector: 'app-manual-calculation',
  templateUrl: './manual-calculation.component.html',
  styleUrls: ['./manual-calculation.component.css']
})
export class ManualCalculationComponent implements OnInit {
  public customSiteName: string = "Custom Location";
  public customLat: string = constants.brandonLat;
  public customLong: string = constants.brandonLong;
  public monthlyKWH: any[] = [1540.484, 2212.643, 2794.123, 2644.573, 2751.145, 2839.637,
    3078.835, 2799.158, 2577.023, 1930.752, 1604.123, 1308.835]
  public energyPrice = 0.2095;

  public generateForm = true;

  customLocationForm = new FormGroup({
    lat: new FormControl(''),
    long: new FormControl(''),
    kwh: new FormControl(''),
    price: new FormControl(''),
  })
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.generateForm = false
    if (this.customLocationForm.value.lat) {
      this.customLat = this.customLocationForm.value.lat
    }
    
    this.customLong = this.customLocationForm.value.long
    let tempArray = []
    for (let i = 0; i < 12; i++) {
      tempArray.push(this.customLocationForm.value.kwh)
    }
    this.monthlyKWH = tempArray
    this.energyPrice = this.customLocationForm.value.price
    this.weatherService.setWeather(this.customLat, this.customLong)
    this.generateForm = true
  }

}

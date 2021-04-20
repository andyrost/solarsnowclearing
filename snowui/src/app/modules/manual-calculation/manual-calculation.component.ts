import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-manual-calculation',
  templateUrl: './manual-calculation.component.html',
  styleUrls: ['./manual-calculation.component.css']
})
export class ManualCalculationComponent implements OnInit {

  outputArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0]

  constructor() { }

  allTempForm = new FormGroup({
    allTemp: new FormControl(35, [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required])
  })
  allSnowForm = new FormGroup({
    allSnow: new FormControl(0, [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)])
  })

  manualCalculationForm = new FormGroup({

    snowdepth: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day1: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day1snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day2: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day2snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day3: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day3snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day4: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day4snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day5: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day5snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day6: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day6snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day7: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day7snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day8: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day8snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day9: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day9snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day10: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day10snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day11: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day11snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day12: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day12snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day13: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day13snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
    day14: new FormControl('', [Validators.pattern("^-?[0-9]*.?[0-9]*$"), Validators.required]),
    day14snow: new FormControl('', [Validators.pattern("^[0-9]*.?[0-9]*$"), Validators.required, Validators.min(0)]),
  })

  ngOnInit(): void {
  }

  public snowmeltForecast(currentSnowDepth: number = 0, forecastTemp: any[], forecastSnow: any[]) {
    const ddCoeff = 2.74;
    let snowDepth = currentSnowDepth;
    let newArray = [];

    for (let i = 0; i < 14; i++){
      snowDepth += forecastSnow[i];

      let meanTempF = forecastTemp[i];
      let meanTempC = (meanTempF - 32)*(5/9);
      let snowMelt = meanTempC * ddCoeff * 3;
      if (snowMelt < 0) {
        snowMelt = 0;
      }
      snowDepth -= snowMelt
      if (snowDepth < 0){
        snowDepth = 0;
      }
      newArray.push(snowDepth);
    }
    return newArray;

  }

  public onTempSubmit(){
    for (let i=0; i<14;i++){
      this.manualCalculationForm.controls['day'+(i+1)].setValue(this.allTempForm.value.allTemp)
    }
  }

  public onSnowSubmit(){
    for (let i=0; i<14;i++){
      this.manualCalculationForm.controls['day'+(i+1)+'snow'].setValue(this.allSnowForm.value.allSnow)
    }
  }

  public onSubmit(){
    let forecastTemp = [];
    let forecastSnow = [];
    for (let i=0; i<14;i++){
      forecastTemp.push(parseFloat(this.manualCalculationForm.value['day'+(i+1)]))
      forecastSnow.push(parseFloat(this.manualCalculationForm.value['day'+(i+1)+'snow']))
    }
    this.outputArray = this.snowmeltForecast(parseFloat(this.manualCalculationForm.value.snowdepth), forecastTemp, forecastSnow)
    console.log(this.outputArray)
  }

}

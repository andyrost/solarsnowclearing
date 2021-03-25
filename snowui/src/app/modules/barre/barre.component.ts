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
  public barreSiteName: string = "Barre";
  public barreLat: string = constants.barreLat
  public barreLong: string = constants.barreLong
  public icon = icon;

  constructor() { }

  ngOnInit(): void {

  }

}

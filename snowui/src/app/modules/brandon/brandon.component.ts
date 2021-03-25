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
  public brandonSiteName: string = "Brandon";
  public brandonLat: string = constants.brandonLat;
  public brandonLong: string = constants.brandonLong;
  public icon = icon;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}

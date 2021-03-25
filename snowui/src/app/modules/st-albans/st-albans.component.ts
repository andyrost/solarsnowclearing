import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/shared/constants';

@Component({
  selector: 'app-st-albans',
  templateUrl: './st-albans.component.html',
  styleUrls: ['./st-albans.component.css']
})
export class StAlbansComponent implements OnInit {
  public stAlbansSiteName:string = "St. Albans";
  public stAlbansLat:string = constants.stAlbansLat;
  public stAlbansLong:string = constants.stAlbansLong;
  constructor() { }

  ngOnInit(): void {
  }

}

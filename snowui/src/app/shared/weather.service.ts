import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { constants } from './constants';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  weatherData: BehaviorSubject<Object> = new BehaviorSubject<Object>(fakeWeather);

  public getWeather(){
    return this.weatherData.asObservable();
  }
  public setWeather(lat:string, long:string){
    this.http.get("https://api.openweathermap.org/data/2.5/onecall?lat="+lat+
    "&lon="+long+"&units=imperial&appid="+constants.weatherKey).subscribe(res=>{
      this.weatherData.next(res);
      console.log(res)
    }
    )
  }
}
const fakeWeather = {"lat":46.81,"lon":9.84,"timezone":"Europe/Zurich","timezone_offset":7200,"current":{"dt":1617995697,"sunrise":1617943449,"sunset":1617991188,"temp":34.61,"feels_like":25.79,"pressure":1021,"humidity":80,"dew_point":29.43,"uvi":0,"clouds":90,"visibility":10000,"wind_speed":12.66,"wind_deg":200,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}]},"minutely":[{"dt":1617995700,"precipitation":0},{"dt":1617995760,"precipitation":0},{"dt":1617995820,"precipitation":0},{"dt":1617995880,"precipitation":0},{"dt":1617995940,"precipitation":0},{"dt":1617996000,"precipitation":0},{"dt":1617996060,"precipitation":0},{"dt":1617996120,"precipitation":0},{"dt":1617996180,"precipitation":0},{"dt":1617996240,"precipitation":0},{"dt":1617996300,"precipitation":0},{"dt":1617996360,"precipitation":0},{"dt":1617996420,"precipitation":0},{"dt":1617996480,"precipitation":0},{"dt":1617996540,"precipitation":0},{"dt":1617996600,"precipitation":0},{"dt":1617996660,"precipitation":0},{"dt":1617996720,"precipitation":0},{"dt":1617996780,"precipitation":0},{"dt":1617996840,"precipitation":0},{"dt":1617996900,"precipitation":0},{"dt":1617996960,"precipitation":0},{"dt":1617997020,"precipitation":0},{"dt":1617997080,"precipitation":0},{"dt":1617997140,"precipitation":0},{"dt":1617997200,"precipitation":0},{"dt":1617997260,"precipitation":0},{"dt":1617997320,"precipitation":0},{"dt":1617997380,"precipitation":0},{"dt":1617997440,"precipitation":0},{"dt":1617997500,"precipitation":0},{"dt":1617997560,"precipitation":0},{"dt":1617997620,"precipitation":0},{"dt":1617997680,"precipitation":0},{"dt":1617997740,"precipitation":0},{"dt":1617997800,"precipitation":0},{"dt":1617997860,"precipitation":0},{"dt":1617997920,"precipitation":0},{"dt":1617997980,"precipitation":0},{"dt":1617998040,"precipitation":0},{"dt":1617998100,"precipitation":0},{"dt":1617998160,"precipitation":0},{"dt":1617998220,"precipitation":0},{"dt":1617998280,"precipitation":0},{"dt":1617998340,"precipitation":0},{"dt":1617998400,"precipitation":0},{"dt":1617998460,"precipitation":0},{"dt":1617998520,"precipitation":0},{"dt":1617998580,"precipitation":0},{"dt":1617998640,"precipitation":0},{"dt":1617998700,"precipitation":0},{"dt":1617998760,"precipitation":0},{"dt":1617998820,"precipitation":0},{"dt":1617998880,"precipitation":0},{"dt":1617998940,"precipitation":0},{"dt":1617999000,"precipitation":0},{"dt":1617999060,"precipitation":0},{"dt":1617999120,"precipitation":0},{"dt":1617999180,"precipitation":0},{"dt":1617999240,"precipitation":0},{"dt":1617999300,"precipitation":0}],"hourly":[{"dt":1617994800,"temp":34.61,"feels_like":27.81,"pressure":1021,"humidity":80,"dew_point":29.43,"uvi":0,"clouds":90,"visibility":10000,"wind_speed":8.37,"wind_deg":165,"wind_gust":7.29,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.12},{"dt":1617998400,"temp":30.18,"feels_like":22.46,"pressure":1023,"humidity":84,"dew_point":26.44,"uvi":0,"clouds":95,"visibility":10000,"wind_speed":8.28,"wind_deg":163,"wind_gust":7.18,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.12},{"dt":1618002000,"temp":26.74,"feels_like":18.23,"pressure":1025,"humidity":87,"dew_point":23.79,"uvi":0,"clouds":98,"visibility":10000,"wind_speed":8.32,"wind_deg":160,"wind_gust":7.29,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.06},{"dt":1618005600,"temp":24.21,"feels_like":15.1,"pressure":1026,"humidity":88,"dew_point":21.52,"uvi":0,"clouds":99,"visibility":10000,"wind_speed":8.37,"wind_deg":159,"wind_gust":7.27,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1618009200,"temp":22.3,"feels_like":12.67,"pressure":1027,"humidity":89,"dew_point":19.87,"uvi":0,"clouds":98,"visibility":10000,"wind_speed":8.52,"wind_deg":155,"wind_gust":7.38,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1618012800,"temp":22.33,"feels_like":12.58,"pressure":1026,"humidity":88,"dew_point":14.94,"uvi":0,"clouds":98,"visibility":10000,"wind_speed":8.7,"wind_deg":154,"wind_gust":7.74,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1618016400,"temp":23.43,"feels_like":13.96,"pressure":1025,"humidity":88,"dew_point":16,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.63,"wind_deg":159,"wind_gust":7.78,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1618020000,"temp":25.21,"feels_like":16.52,"pressure":1024,"humidity":87,"dew_point":17.64,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.1,"wind_deg":158,"wind_gust":7.67,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.03},{"dt":1618023600,"temp":25.97,"feels_like":17.76,"pressure":1023,"humidity":87,"dew_point":18.55,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":7.63,"wind_deg":157,"wind_gust":7.25,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.03},{"dt":1618027200,"temp":26.42,"feels_like":18.52,"pressure":1023,"humidity":87,"dew_point":19.06,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":7.34,"wind_deg":159,"wind_gust":7.05,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.03},{"dt":1618030800,"temp":27.64,"feels_like":20.19,"pressure":1022,"humidity":87,"dew_point":20.21,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":7.07,"wind_deg":160,"wind_gust":7.02,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1618034400,"temp":30.51,"feels_like":24.08,"pressure":1021,"humidity":86,"dew_point":22.96,"uvi":0.21,"clouds":100,"visibility":10000,"wind_speed":6.46,"wind_deg":167,"wind_gust":7.87,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1618038000,"temp":33.12,"feels_like":27.19,"pressure":1020,"humidity":81,"dew_point":24.4,"uvi":0.82,"clouds":100,"visibility":10000,"wind_speed":6.49,"wind_deg":183,"wind_gust":7.9,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1618041600,"temp":34.86,"feels_like":29.23,"pressure":1020,"humidity":82,"dew_point":26.19,"uvi":1.73,"clouds":92,"visibility":10000,"wind_speed":6.58,"wind_deg":194,"wind_gust":7.49,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.05},{"dt":1618045200,"temp":36.12,"feels_like":30.72,"pressure":1019,"humidity":86,"dew_point":28.6,"uvi":2.81,"clouds":88,"visibility":10000,"wind_speed":6.6,"wind_deg":181,"wind_gust":7.9,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1618048800,"temp":37.24,"feels_like":31.75,"pressure":1018,"humidity":89,"dew_point":30.6,"uvi":3.96,"clouds":88,"visibility":10000,"wind_speed":7.09,"wind_deg":184,"wind_gust":8.75,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.03},{"dt":1618052400,"temp":38.28,"feels_like":33.24,"pressure":1018,"humidity":90,"dew_point":31.91,"uvi":4.52,"clouds":91,"visibility":10000,"wind_speed":6.71,"wind_deg":186,"wind_gust":8.43,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.09},{"dt":1618056000,"temp":39.24,"feels_like":34.34,"pressure":1017,"humidity":91,"dew_point":32.81,"uvi":4.42,"clouds":89,"visibility":10000,"wind_speed":6.8,"wind_deg":189,"wind_gust":9.04,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.09},{"dt":1618059600,"temp":39.42,"feels_like":34.47,"pressure":1017,"humidity":89,"dew_point":32.56,"uvi":3.87,"clouds":90,"visibility":10000,"wind_speed":6.96,"wind_deg":194,"wind_gust":8.43,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.18},{"dt":1618063200,"temp":39.25,"feels_like":34.48,"pressure":1017,"humidity":88,"dew_point":31.96,"uvi":2.75,"clouds":95,"visibility":10000,"wind_speed":6.6,"wind_deg":186,"wind_gust":8.3,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.09},{"dt":1618066800,"temp":39.18,"feels_like":34.48,"pressure":1016,"humidity":87,"dew_point":31.69,"uvi":1.58,"clouds":97,"visibility":10000,"wind_speed":6.46,"wind_deg":186,"wind_gust":8.57,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.09},{"dt":1618070400,"temp":38.71,"feels_like":33.49,"pressure":1016,"humidity":84,"dew_point":30.52,"uvi":0.68,"clouds":97,"visibility":10000,"wind_speed":7.16,"wind_deg":185,"wind_gust":9.42,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.09},{"dt":1618074000,"temp":37.18,"feels_like":31.75,"pressure":1017,"humidity":82,"dew_point":28.71,"uvi":0.19,"clouds":97,"visibility":10000,"wind_speed":7,"wind_deg":179,"wind_gust":8.84,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.09},{"dt":1618077600,"temp":33.21,"feels_like":26.13,"pressure":1018,"humidity":83,"dew_point":24.93,"uvi":0,"clouds":98,"visibility":10000,"wind_speed":8.3,"wind_deg":169,"wind_gust":7.45,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.09},{"dt":1618081200,"temp":32.23,"feels_like":24.66,"pressure":1020,"humidity":84,"dew_point":24.13,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.81,"wind_deg":166,"wind_gust":8.23,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.15},{"dt":1618084800,"temp":31.91,"feels_like":24.3,"pressure":1020,"humidity":85,"dew_point":24.13,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.75,"wind_deg":160,"wind_gust":8.19,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.12},{"dt":1618088400,"temp":31.95,"feels_like":24.37,"pressure":1019,"humidity":86,"dew_point":24.39,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.7,"wind_deg":158,"wind_gust":8.28,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.15},{"dt":1618092000,"temp":32.56,"feels_like":25.14,"pressure":1019,"humidity":86,"dew_point":25.02,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.66,"wind_deg":156,"wind_gust":8.88,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.18},{"dt":1618095600,"temp":32.67,"feels_like":25.34,"pressure":1018,"humidity":86,"dew_point":25.23,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.52,"wind_deg":156,"wind_gust":8.57,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.18},{"dt":1618099200,"temp":32.81,"feels_like":25.7,"pressure":1018,"humidity":86,"dew_point":25.38,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.21,"wind_deg":154,"wind_gust":8.14,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.18},{"dt":1618102800,"temp":32.7,"feels_like":25.59,"pressure":1017,"humidity":86,"dew_point":25.16,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.19,"wind_deg":151,"wind_gust":7.92,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.26},{"dt":1618106400,"temp":32.43,"feels_like":25.21,"pressure":1017,"humidity":86,"dew_point":25,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.28,"wind_deg":150,"wind_gust":7.85,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.26},{"dt":1618110000,"temp":32.88,"feels_like":25.93,"pressure":1016,"humidity":87,"dew_point":25.48,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":7.96,"wind_deg":150,"wind_gust":7.63,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.3},{"dt":1618113600,"temp":32.85,"feels_like":25.74,"pressure":1016,"humidity":87,"dew_point":25.68,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":8.23,"wind_deg":157,"wind_gust":8.03,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.35},{"dt":1618117200,"temp":34.02,"feels_like":27.36,"pressure":1015,"humidity":88,"dew_point":27.07,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":7.9,"wind_deg":150,"wind_gust":8.28,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.35},{"dt":1618120800,"temp":34.74,"feels_like":28.17,"pressure":1015,"humidity":88,"dew_point":27.7,"uvi":0.25,"clouds":100,"visibility":10000,"wind_speed":8.01,"wind_deg":150,"wind_gust":8.7,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.35},{"dt":1618124400,"temp":37.36,"feels_like":31.41,"pressure":1013,"humidity":88,"dew_point":30.24,"uvi":0.69,"clouds":86,"visibility":10000,"wind_speed":7.96,"wind_deg":155,"wind_gust":9.31,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.35},{"dt":1618128000,"temp":39.11,"feels_like":33.67,"pressure":1012,"humidity":92,"dew_point":32.99,"uvi":1.43,"clouds":93,"visibility":10000,"wind_speed":7.67,"wind_deg":156,"wind_gust":9.28,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.35},{"dt":1618131600,"temp":40.51,"feels_like":35.67,"pressure":1012,"humidity":92,"dew_point":34.47,"uvi":2.32,"clouds":95,"visibility":10000,"wind_speed":7.16,"wind_deg":166,"wind_gust":9.26,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.35},{"dt":1618135200,"temp":41.32,"feels_like":36.45,"pressure":1012,"humidity":92,"dew_point":35.17,"uvi":3.17,"clouds":94,"visibility":6606,"wind_speed":7.52,"wind_deg":181,"wind_gust":9.66,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.37},{"dt":1618138800,"temp":42.15,"feels_like":37.65,"pressure":1011,"humidity":90,"dew_point":35.42,"uvi":3.61,"clouds":95,"visibility":5979,"wind_speed":7.16,"wind_deg":182,"wind_gust":9.48,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.45},{"dt":1618142400,"temp":41.79,"feels_like":37.33,"pressure":1012,"humidity":91,"dew_point":35.47,"uvi":3.54,"clouds":96,"visibility":4337,"wind_speed":6.93,"wind_deg":193,"wind_gust":9.31,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.45},{"dt":1618146000,"temp":40.55,"feels_like":35.47,"pressure":1013,"humidity":94,"dew_point":34.97,"uvi":3.11,"clouds":100,"visibility":2637,"wind_speed":7.58,"wind_deg":196,"wind_gust":9.24,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"pop":0.57,"snow":{"1h":0.24}},{"dt":1618149600,"temp":40.91,"feels_like":35.96,"pressure":1013,"humidity":89,"dew_point":34,"uvi":2.21,"clouds":100,"visibility":10000,"wind_speed":7.49,"wind_deg":182,"wind_gust":9.48,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.61},{"dt":1618153200,"temp":42.12,"feels_like":37.74,"pressure":1012,"humidity":83,"dew_point":33.48,"uvi":1.27,"clouds":97,"visibility":10000,"wind_speed":6.91,"wind_deg":178,"wind_gust":9.17,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.53},{"dt":1618156800,"temp":41.79,"feels_like":37.44,"pressure":1012,"humidity":82,"dew_point":32.95,"uvi":0.71,"clouds":90,"visibility":10000,"wind_speed":6.76,"wind_deg":178,"wind_gust":8.93,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.45},{"dt":1618160400,"temp":39.58,"feels_like":34.72,"pressure":1013,"humidity":85,"dew_point":31.89,"uvi":0.21,"clouds":82,"visibility":10000,"wind_speed":6.85,"wind_deg":173,"wind_gust":8.08,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0.45},{"dt":1618164000,"temp":35.15,"feels_like":28.74,"pressure":1015,"humidity":88,"dew_point":28.15,"uvi":0,"clouds":77,"visibility":10000,"wind_speed":7.9,"wind_deg":163,"wind_gust":7.74,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0.45}],"daily":[{"dt":1617966000,"sunrise":1617943449,"sunset":1617991188,"temp":{"day":36.72,"min":17.64,"max":37.63,"night":26.74,"eve":34.63,"morn":19.26},"feels_like":{"day":31.44,"night":8.46,"eve":28.85,"morn":8.46},"pressure":1021,"humidity":84,"dew_point":28.6,"wind_speed":6.6,"wind_deg":195,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":96,"pop":0.12,"uvi":3.95},{"dt":1618052400,"sunrise":1618029734,"sunset":1618077670,"temp":{"day":38.28,"min":22.3,"max":39.42,"night":31.95,"eve":37.18,"morn":27.64},"feels_like":{"day":33.24,"night":20.19,"eve":31.75,"morn":20.19},"pressure":1018,"humidity":90,"dew_point":31.91,"wind_speed":6.71,"wind_deg":186,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"clouds":91,"pop":0.18,"uvi":4.52},{"dt":1618138800,"sunrise":1618116020,"sunset":1618164152,"temp":{"day":42.15,"min":32.43,"max":42.15,"night":33.46,"eve":39.58,"morn":34.02},"feels_like":{"day":37.65,"night":27.36,"eve":34.72,"morn":27.36},"pressure":1011,"humidity":90,"dew_point":35.42,"wind_speed":7.16,"wind_deg":182,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":95,"pop":0.61,"snow":0.24,"uvi":3.61},{"dt":1618225200,"sunrise":1618202307,"sunset":1618250634,"temp":{"day":29.73,"min":22.26,"max":35.92,"night":22.26,"eve":24.35,"morn":33.22},"feels_like":{"day":23.23,"night":33.22,"eve":15.42,"morn":33.22},"pressure":1020,"humidity":95,"dew_point":24.51,"wind_speed":6.38,"wind_deg":325,"weather":[{"id":601,"main":"Snow","description":"snow","icon":"13d"}],"clouds":100,"pop":1,"snow":21.59,"uvi":2.05},{"dt":1618311600,"sunrise":1618288595,"sunset":1618337116,"temp":{"day":25.27,"min":13.93,"max":25.27,"night":13.93,"eve":18.09,"morn":19.56},"feels_like":{"day":15.4,"night":9.34,"eve":11.1,"morn":9.34},"pressure":1027,"humidity":88,"dew_point":18.14,"wind_speed":9.95,"wind_deg":339,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":100,"pop":1,"snow":6.4,"uvi":4.22},{"dt":1618398000,"sunrise":1618374883,"sunset":1618423598,"temp":{"day":28.63,"min":5.85,"max":29.17,"night":17.08,"eve":18.18,"morn":15.08},"feels_like":{"day":21.78,"night":15.08,"eve":13.08,"morn":15.08},"pressure":1026,"humidity":82,"dew_point":19.92,"wind_speed":6.55,"wind_deg":331,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":97,"pop":0.49,"snow":0.55,"uvi":4.49},{"dt":1618484400,"sunrise":1618461172,"sunset":1618510080,"temp":{"day":31.66,"min":9.09,"max":32.9,"night":19.67,"eve":22.51,"morn":17.28},"feels_like":{"day":27.73,"night":9.66,"eve":22.51,"morn":9.66},"pressure":1025,"humidity":67,"dew_point":18.21,"wind_speed":3.96,"wind_deg":309,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"clouds":1,"pop":0,"uvi":5},{"dt":1618570800,"sunrise":1618547461,"sunset":1618596562,"temp":{"day":32.7,"min":16.09,"max":32.7,"night":24.98,"eve":27.34,"morn":23.97},"feels_like":{"day":26.83,"night":23.97,"eve":21.27,"morn":23.97},"pressure":1022,"humidity":79,"dew_point":23.29,"wind_speed":6.31,"wind_deg":327,"weather":[{"id":600,"main":"Snow","description":"light snow","icon":"13d"}],"clouds":71,"pop":1,"snow":3.15,"uvi":5}]}
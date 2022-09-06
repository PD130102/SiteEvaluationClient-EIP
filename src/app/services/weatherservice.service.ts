import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class WeatherserviceService {

  constructor(private http: HttpClient) { }
  getWeather(city : any)
  {
    return this.http.get('https://api.weatherapi.com/v1/current.json?key=fbe103d4de7a4d7897665643220509&q='+city+'&aqi=yes');
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpWeatherService {
  private _url = 'http://api.openweathermap.org/data/2.5/weather';
  private _key = '4bf0de50c3ad817f1e8a5efe71a33dc6';

  constructor(private _client:HttpClient) { }

  public getWeather(city: string) : Observable<any>{
     var url: string = `${this._url}?q=${city}&appid=${this._key}`;

     console.log(url);

    return this._client.get(url);
  }
}

//http://api.openweathermap.org/data/2.5/weather?q=Odessa&appid=990b341a2f449d9984aa6c86c14b3d70

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpMovieService {
  private _key: string = 'e484cb07';
  private _baseUrl: string = 'http://www.omdbapi.com';

  constructor(private _client: HttpClient) {}

  public getMoive(title: string, year?: number): Observable<any> {
    var url = `${this._baseUrl}/?apikey=${this._key}&type=movie&t=${title}`;

    if (year != null) url += `&y=${year}`;

    return this._client.get(url);
  }
}

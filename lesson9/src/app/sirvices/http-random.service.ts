import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpRandomService {
  private _url = 'https://api.random.org/json-rpc/4/invoke';
  private _key = '18b54b24-250a-4d4a-8c1e-ae829261aa9a';

  constructor(private _client:HttpClient) { }

  public getRandom(min: number, max:number, count:number) : Observable<any>{

     const body = {
      "jsonrpc": "2.0",
      "method": "generateIntegers",
      "params": {
          "apiKey": this._key,
          "n": count,
          "min": min,
          "max": max,
          "replacement": true
      },
      "id": 42
  }

    return this._client.post(this._url, body);
  }
}

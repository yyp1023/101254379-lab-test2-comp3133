import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpacexapiService {

  constructor(private http: HttpClient) { }

  details: any;

  getData() {
    let url = 'https://api.spacexdata.com/v3/launches';
    return this.http.get(url);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(
    private httpClient: HttpClient
  ) { }

  baseUrl: string = "http://localhost:3000/locations";

  getAllLocation(): Observable<any>{
    return this.httpClient.get(this.baseUrl);
  }

  createLocation(location: Location): Observable<any>{
    return this.httpClient.post(this.baseUrl, location);
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Location } from '../model/location.model';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  baseUrl: string= "http://localhost:3000/locations";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllLocation():Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);
  }

  locationCreate(location: Location): Observable<any>{
    return this.httpClient.post(this.baseUrl, location);
  }

  locationDelete(id: String): Observable<any>{
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  loationUpdate(id: String, location: Location): Observable<any>{
    return this.httpClient.put(this.baseUrl + "/" + id, location);
  }

  getById(id: string): Observable<any>{
    return this.httpClient.get(this.baseUrl + "/" + id);
  }
}

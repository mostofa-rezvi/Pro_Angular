import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl: string = "http://localhost:3000/locations";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllDoctor(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);
  }
}

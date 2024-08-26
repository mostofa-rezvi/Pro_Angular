import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doctor } from '../Model/doctor.model';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  baseUrl: string = "http://localhost:3000/doctors";


  constructor(
    private httpClient: HttpClient
  ) { }

  getAllDoctor(): Observable<any>{
    return this.httpClient.get<any>(this.baseUrl);
  }

  doctorAdd(doctor: Doctor): Observable<any>{
    return this.httpClient.post(this.baseUrl, doctor);
  }

  doctorDelete(id: string): Observable<any>{
    return this.httpClient.delete(this.baseUrl + "/" + id);
  }

  doctorUpdate(id: string, doctor: Doctor): Observable<any>{
    return this.httpClient.put(this.baseUrl + "/" + id, doctor);
  }

  getById(id: string): Observable<any>{
    return this.httpClient.get(this.baseUrl + "/" + id);
  }
}

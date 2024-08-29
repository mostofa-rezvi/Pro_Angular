import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileDocModel } from '../Model/profiledoc.model';

@Injectable({
  providedIn: 'root'
})
export class ProfiledocService {
  private apiUrl = 'http://localhost:3000/profiledoc';

  constructor(private http: HttpClient) { }

  // Get all doctor profiles
  getDoctors(): Observable<ProfileDocModel[]> {
    return this.http.get<ProfileDocModel[]>(this.apiUrl);
  }

  // Get doctor profile by id
  getDoctorById(id: number): Observable<ProfileDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ProfileDocModel>(url);
  }

  // Add a new doctor profile
  addDoctor(doctor: ProfileDocModel): Observable<ProfileDocModel> {
    return this.http.post<ProfileDocModel>(this.apiUrl, doctor);
  }

  // Update an existing doctor profile
  updateDoctor(doctor: ProfileDocModel): Observable<ProfileDocModel> {
    const url = `${this.apiUrl}/${doctor.id}`;
    return this.http.put<ProfileDocModel>(url, doctor);
  }

  // Delete a doctor profile
  deleteDoctor(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

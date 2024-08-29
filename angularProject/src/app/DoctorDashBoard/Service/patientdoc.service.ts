import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PatientDocModel } from '../Model/patientdoc.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientdocService {
  private apiUrl = 'http://localhost:3000/patientsdoc';

  constructor(private http: HttpClient) { }

  // Get all patients
  getPatients(): Observable<PatientDocModel[]> {
    return this.http.get<PatientDocModel[]>(this.apiUrl);
  }

  // Get patient by id
  getPatientById(id: number): Observable<PatientDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PatientDocModel>(url);
  }

  // Add a new patient
  addPatient(patient: PatientDocModel): Observable<PatientDocModel> {
    return this.http.post<PatientDocModel>(this.apiUrl, patient);
  }

  // Update an existing patient
  updatePatient(patient: PatientDocModel): Observable<PatientDocModel> {
    const url = `${this.apiUrl}/${patient.id}`;
    return this.http.put<PatientDocModel>(url, patient);
  }

  // Delete a patient
  deletePatient(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

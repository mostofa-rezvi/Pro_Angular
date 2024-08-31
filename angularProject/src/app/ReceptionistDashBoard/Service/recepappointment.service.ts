import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RecepAppointment } from '../Model/recepappointment.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecepappointmentService {
  private apiUrl = 'http://localhost:3000/appointments'; // JSON Server URL

  constructor(private http: HttpClient) { }

  // Get all appointments
  getAppointments(): Observable<RecepAppointment[]> {
    return this.http.get<RecepAppointment[]>(this.apiUrl);
  }

  // Get appointment by ID
  getAppointmentById(id: string): Observable<RecepAppointment> {
    return this.http.get<RecepAppointment>(`${this.apiUrl}/${id}`);
  }

  // Add a new appointment
  addAppointment(appointment: RecepAppointment): Observable<RecepAppointment> {
    return this.http.post<RecepAppointment>(this.apiUrl, appointment);
  }

  // Update an existing appointment
  updateAppointment(id: string, appointment: RecepAppointment): Observable<RecepAppointment> {
    return this.http.put<RecepAppointment>(`${this.apiUrl}/${id}`, appointment);
  }

  // Delete an appointment
  deleteAppointment(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

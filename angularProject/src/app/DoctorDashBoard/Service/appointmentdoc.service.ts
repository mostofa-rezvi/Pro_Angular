import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppointmentDocModel } from '../Model/appointmentdoc.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentdocService {
  private apiUrl = 'http://localhost:3000/appointmentdoc'; // URL to JSON server

  constructor(private http: HttpClient) { }

  // Get all appointments
  getAppointments(): Observable<AppointmentDocModel[]> {
    return this.http.get<AppointmentDocModel[]>(this.apiUrl);
  }

  // Get appointment by id
  getAppointmentById(id: number): Observable<AppointmentDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<AppointmentDocModel>(url);
  }

  // Add a new appointment
  addAppointment(appointment: AppointmentDocModel): Observable<AppointmentDocModel> {
    return this.http.post<AppointmentDocModel>(this.apiUrl, appointment);
  }

  // Update an existing appointment
  updateAppointment(appointment: AppointmentDocModel): Observable<AppointmentDocModel> {
    const url = `${this.apiUrl}/${appointment.id}`;
    return this.http.put<AppointmentDocModel>(url, appointment);
  }

  // Delete an appointment
  deleteAppointment(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

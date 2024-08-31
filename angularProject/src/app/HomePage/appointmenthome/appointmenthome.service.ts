import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecepAppointment } from '../../ReceptionistDashBoard/Model/recepappointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmenthomeService {
  private apiUrl = 'http://localhost:3000/appointments'; // Adjust the URL to your JSON server

  constructor(private http: HttpClient) {}

  getDepartments(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:3000/departments'); // Adjust the URL to your JSON server
  }

  getDoctorsByDepartment(departmentId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/doctors?departmentId=${departmentId}`); // Adjust the URL to your JSON server
  }

  appointment(appointment: RecepAppointment): Observable<RecepAppointment> {
    return this.http.post<RecepAppointment>(this.apiUrl, appointment);
  }
}

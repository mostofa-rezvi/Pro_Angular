import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DashboardDocModel } from '../Model/dashboarddoc.model';

@Injectable({
  providedIn: 'root'
})
export class DashboarddocService {
  private apiUrl = 'http://localhost:3000/dashboarddoc';

  constructor(private http: HttpClient) { }

  // Get doctor dashboard data by doctor ID
  getDoctorDashboard(doctorId: number): Observable<DashboardDocModel> {
    const url = `${this.apiUrl}/${doctorId}`;
    return this.http.get<DashboardDocModel>(url);
  }

  // Optionally, get all doctors' dashboard data
  getAllDoctors(): Observable<DashboardDocModel[]> {
    return this.http.get<DashboardDocModel[]>(this.apiUrl);
  }

  // You can also add other methods as needed, such as updating or adding new dashboard data

}

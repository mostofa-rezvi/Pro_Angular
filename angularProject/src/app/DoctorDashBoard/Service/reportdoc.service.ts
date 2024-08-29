import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReportDocModel } from '../Model/reportdoc.model';

@Injectable({
  providedIn: 'root'
})
export class ReportdocService {
  private apiUrl = 'http://localhost:3000/reportdoc'; // URL to JSON server

  constructor(private http: HttpClient) { }

  // Get all reports
  getReports(): Observable<ReportDocModel[]> {
    return this.http.get<ReportDocModel[]>(this.apiUrl);
  }

  // Get report by id
  getReportById(id: number): Observable<ReportDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ReportDocModel>(url);
  }

  // Add a new report
  addReport(report: ReportDocModel): Observable<ReportDocModel> {
    return this.http.post<ReportDocModel>(this.apiUrl, report);
  }

  // Update an existing report
  updateReport(report: ReportDocModel): Observable<ReportDocModel> {
    const url = `${this.apiUrl}/${report.id}`;
    return this.http.put<ReportDocModel>(url, report);
  }

  // Delete a report
  deleteReport(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

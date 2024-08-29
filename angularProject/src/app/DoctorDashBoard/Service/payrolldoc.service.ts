import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PayrollDocModel } from '../Model/payrolldoc.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PayrolldocService {
  private apiUrl = 'http://localhost:3000/payrolldoc';

  constructor(private http: HttpClient) { }

  // Get all payroll records
  getPayrolls(): Observable<PayrollDocModel[]> {
    return this.http.get<PayrollDocModel[]>(this.apiUrl);
  }

  // Get payroll record by id
  getPayrollById(id: number): Observable<PayrollDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<PayrollDocModel>(url);
  }

  // Add a new payroll record
  addPayroll(payroll: PayrollDocModel): Observable<PayrollDocModel> {
    return this.http.post<PayrollDocModel>(this.apiUrl, payroll);
  }

  // Update an existing payroll record
  updatePayroll(payroll: PayrollDocModel): Observable<PayrollDocModel> {
    const url = `${this.apiUrl}/${payroll.id}`;
    return this.http.put<PayrollDocModel>(url, payroll);
  }

  // Delete a payroll record
  deletePayroll(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

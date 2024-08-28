import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../Model/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  baseUrl: string = "http://localhost:3000/students";

  constructor(
    private httpClient: HttpClient
  ) { }

  getAllStudent(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }

  studentAdd(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(this.baseUrl, student);
  }

  studentDelete(id: string): Observable<any>{
    return this.httpClient.delete<any>(`${this.baseUrl}${id}`);

    // Observable<void>
    // return this.httpClient.delete<void>(`${this.baseUrl}${id}`);
    // return this.httpClient.delete<void>(this.baseUrl + id);
  }

  getStudentById(id: string): Observable<Student>{
    const url = `${this.baseUrl}${id}`;
    return this.httpClient.get<Student>(url);
  }

  studentUpdate(student: Student): Observable<Student>{
    return this.httpClient.put<Student>(`${this.baseUrl}${student.id}`, student);
  }
}

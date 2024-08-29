import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivitiesDocModel } from '../Model/activitiesdoc.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesdocService {
  private apiUrl = 'http://localhost:3000/activitiesdoc'; // URL to JSON server

  constructor(private http: HttpClient) { }

  // Get all activities
  getActivities(): Observable<ActivitiesDocModel[]> {
    return this.http.get<ActivitiesDocModel[]>(this.apiUrl);
  }

  // Get activity by id
  getActivityById(id: number): Observable<ActivitiesDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<ActivitiesDocModel>(url);
  }

  // Add a new activity
  addActivity(activity: ActivitiesDocModel): Observable<ActivitiesDocModel> {
    return this.http.post<ActivitiesDocModel>(this.apiUrl, activity);
  }

  // Update an existing activity
  updateActivity(activity: ActivitiesDocModel): Observable<ActivitiesDocModel> {
    const url = `${this.apiUrl}/${activity.id}`;
    return this.http.put<ActivitiesDocModel>(url, activity);
  }

  // Delete an activity
  deleteActivity(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

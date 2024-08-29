import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SettingsDocModel } from '../Model/settingsdoc.model';

@Injectable({
  providedIn: 'root'
})
export class SettingsdocService {
  private apiUrl = 'http://localhost:3000/settingsdoc'; // URL to JSON server

  constructor(private http: HttpClient) { }

  // Get all settings
  getSettings(): Observable<SettingsDocModel[]> {
    return this.http.get<SettingsDocModel[]>(this.apiUrl);
  }

  // Get settings by doctorId
  getSettingsByDoctorId(doctorId: number): Observable<SettingsDocModel[]> {
    const url = `${this.apiUrl}?doctorId=${doctorId}`;
    return this.http.get<SettingsDocModel[]>(url);
  }

  // Get settings by id
  getSettingsById(id: number): Observable<SettingsDocModel> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<SettingsDocModel>(url);
  }

  // Add a new settings record
  addSettings(settings: SettingsDocModel): Observable<SettingsDocModel> {
    return this.http.post<SettingsDocModel>(this.apiUrl, settings);
  }

  // Update an existing settings record
  updateSettings(settings: SettingsDocModel): Observable<SettingsDocModel> {
    const url = `${this.apiUrl}/${settings.id}`;
    return this.http.put<SettingsDocModel>(url, settings);
  }

  // Delete a settings record
  deleteSettings(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

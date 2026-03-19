import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ProgressReport {
  id: number;
  title: string;
  titleTh: string;
  icon: string;
  date: string;
  value: number;
  unit: string;
  trend: 'up' | 'down' | 'stable';
}

@Injectable({ providedIn: 'root' })
export class ProgressreportsService {
  private apiUrl = 'http://localhost:3000/api/progressreports';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProgressReport[]> {
    return this.http.get<ProgressReport[]>(this.apiUrl);
  }

  getById(id: number): Observable<ProgressReport> {
    return this.http.get<ProgressReport>(`${this.apiUrl}/${id}`);
  }

  create(report: Omit<ProgressReport, 'id'>): Observable<ProgressReport> {
    return this.http.post<ProgressReport>(this.apiUrl, report);
  }

  update(id: number, report: Partial<ProgressReport>): Observable<ProgressReport> {
    return this.http.put<ProgressReport>(`${this.apiUrl}/${id}`, report);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
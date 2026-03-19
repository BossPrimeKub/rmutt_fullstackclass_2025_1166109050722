import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Booking {
  id: number;
  title: string;
  date: string;
  time: string;
  status: 'upcoming' | 'past';
}

@Injectable({ providedIn: 'root' })
export class ScheduleService {
  private apiUrl = 'http://localhost:3000/api/schedules';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Booking[]> {
    return this.http.get<Booking[]>(this.apiUrl);
  }

  getById(id: number): Observable<Booking> {
    return this.http.get<Booking>(`${this.apiUrl}/${id}`);
  }

  create(booking: Omit<Booking, 'id'>): Observable<Booking> {
    return this.http.post<Booking>(this.apiUrl, booking);
  }

  update(id: number, booking: Partial<Booking>): Observable<Booking> {
    return this.http.put<Booking>(`${this.apiUrl}/${id}`, booking);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
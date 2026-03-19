import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthenService {
  private apiUrl = 'http://localhost:5050/api/auth';

  constructor(private http: HttpClient) {}

  register(data: any) { return this.http.post(`${this.apiUrl}/register`, data); }
  login(data: any) { return this.http.post(`${this.apiUrl}/login`, data); }
}
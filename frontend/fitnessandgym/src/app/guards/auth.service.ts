import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // ปรับให้ตรงกับ backend

  constructor(private http: HttpClient, private router: Router) {}

  // เช็คว่า login อยู่ไหม
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // ดึงข้อมูล profile
  getProfile(): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
    return this.http.get(`${this.apiUrl}/profile`, { headers });
  }

  // logout
  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  // login
  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials);
  }
}
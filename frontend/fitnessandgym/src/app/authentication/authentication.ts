import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-authentication',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './authentication.html',
  styleUrls: ['./authentication.css']
})
export class AuthenticationComponent {
  mode: 'login' | 'register' = 'login';
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMsg = '';
  successMsg = '';
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {}

  setMode(mode: 'login' | 'register'): void {
    this.mode = mode;
    this.errorMsg = '';
    this.successMsg = '';
    this.username = '';
    this.email = '';
    this.password = '';
    this.confirmPassword = '';
  }

  login(): void {
    if (!this.email || !this.password) {
      this.errorMsg = 'กรุณากรอก email และ password';
      return;
    }
    this.isLoading = true;
    this.errorMsg = '';
    this.authService.login(this.email, this.password).subscribe({
      next: () => this.router.navigate(['/equipment']),
      error: (err) => {
        this.errorMsg = err.error?.message || 'Login ไม่สำเร็จ';
        this.isLoading = false;
      }
    });
  }

  register(): void {
    if (!this.username || !this.email || !this.password || !this.confirmPassword) {
      this.errorMsg = 'กรุณากรอกข้อมูลให้ครบ';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMsg = 'Password ไม่ตรงกัน';
      return;
    }
    if (this.password.length < 6) {
      this.errorMsg = 'Password ต้องมีอย่างน้อย 6 ตัวอักษร';
      return;
    }
    this.isLoading = true;
    this.errorMsg = '';
    this.authService.register(this.username, this.email, this.password).subscribe({
      next: () => this.router.navigate(['/equipment']),
      error: (err) => {
        this.errorMsg = err.error?.message || 'สมัครสมาชิกไม่สำเร็จ';
        this.isLoading = false;
      }
    });
  }
}
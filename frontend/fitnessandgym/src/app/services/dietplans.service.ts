import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface DietPlan {
  id: number;
  name: string;
  name_th: string;
  icon: string;
  calories: number;
  duration: string;
  category: 'weight-loss' | 'muscle-gain' | 'maintenance';
}

@Injectable({ providedIn: 'root' })
export class DietplansService {
  private apiUrl = 'http://localhost:5050/api/dietplans';

  constructor(private http: HttpClient) {}

  getAll(): Observable<DietPlan[]> {
    return this.http.get<DietPlan[]>(this.apiUrl);
  }
}
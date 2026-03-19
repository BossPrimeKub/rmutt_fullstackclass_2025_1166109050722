import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DietPlan, DietplansService } from '../../services/dietplans.service';

@Component({
  selector: 'app-dietplans',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dietplans.html',
  styleUrl: './dietplans.css'
})
export class DietplansComponent implements OnInit {
  username = '';
  activeTab: 'all' | 'weight-loss' | 'muscle-gain' | 'maintenance' = 'all';
  dietPlans: DietPlan[] = [];
  isLoading = true;
  errorMsg = '';

  constructor(
    private dietplansService: DietplansService,
    private authService: AuthService,
    private router: Router
  ) {}

  get filteredPlans(): DietPlan[] {
    if (this.activeTab === 'all') return this.dietPlans;
    return this.dietPlans.filter(p => p.category === this.activeTab);
  }

  ngOnInit(): void {
    this.username = this.authService.getUser()?.username || 'Guest';
    this.loadDietPlans();
  }

  loadDietPlans(): void {
    this.isLoading = true;
    this.errorMsg = '';
    this.dietplansService.getAll().subscribe({
      next: (data) => { this.dietPlans = data; this.isLoading = false; },
      error: () => { this.errorMsg = 'Failed to load diet plans'; this.isLoading = false; }
    });
  }

  setTab(tab: 'all' | 'weight-loss' | 'muscle-gain' | 'maintenance'): void {
    this.activeTab = tab;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
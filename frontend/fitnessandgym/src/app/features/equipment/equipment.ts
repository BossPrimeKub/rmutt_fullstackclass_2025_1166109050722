import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { retry } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Equipment, EquipmentService } from '../../services/equipment.service';

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './equipment.html',
  styleUrl: './equipment.css'
})
export class EquipmentComponent implements OnInit {
  username = '';
  activeTab: 'all' | 'available' | 'inuse' = 'all';
  equipmentList: Equipment[] = [];
  isLoading = true;
  errorMsg = '';

  constructor(
    private equipmentService: EquipmentService,
    private authService: AuthService,
    private router: Router
  ) {}

  get filteredEquipment(): Equipment[] {
    if (this.activeTab === 'all') return this.equipmentList;
    return this.equipmentList.filter(item => item.status === this.activeTab);
  }

  ngOnInit(): void {
    this.username = this.authService.getUser()?.username || 'Guest';
    this.loadEquipment();
  }

  loadEquipment(): void {
    this.isLoading = true;
    this.errorMsg = '';
    this.equipmentService.getAll().pipe(retry(2)).subscribe({
      next: (data) => { this.equipmentList = data; this.isLoading = false; },
      error: (err) => {
        this.errorMsg = 'Failed to load equipment';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  setTab(tab: 'all' | 'available' | 'inuse'): void {
    this.activeTab = tab;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
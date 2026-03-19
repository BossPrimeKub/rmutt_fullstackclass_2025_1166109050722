import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface DietPlan {
  id: number;
  name: string;
  nameTh: string;
  icon: string;
  category: 'weight-loss' | 'muscle-gain' | 'maintenance';
  calories: number;
  duration: string;
}

@Component({
  selector: 'app-dietplans',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dietplans.html',
  styleUrls: ['./dietplans.css']
})
export class DietplansComponent implements OnInit {
  username = 'diddy';
  activeTab: 'all' | 'weight-loss' | 'muscle-gain' | 'maintenance' = 'all';

  dietPlans: DietPlan[] = [
    { id: 1, name: 'Keto Diet',         nameTh: 'คีโต',                icon: '🥑', category: 'weight-loss',  calories: 1500, duration: '4 weeks' },
    { id: 2, name: 'High Protein',      nameTh: 'โปรตีนสูง',           icon: '🍗', category: 'muscle-gain',  calories: 2800, duration: '8 weeks' },
    { id: 3, name: 'Balanced Diet',     nameTh: 'สมดุล',               icon: '🥗', category: 'maintenance',  calories: 2000, duration: '12 weeks' },
    { id: 4, name: 'Intermittent Fast', nameTh: 'อดอาหารช่วง',         icon: '⏱️', category: 'weight-loss',  calories: 1800, duration: '6 weeks' },
    { id: 5, name: 'Bulk Plan',         nameTh: 'เพิ่มมวลกล้ามเนื้อ',  icon: '💪', category: 'muscle-gain',  calories: 3200, duration: '10 weeks' },
    { id: 6, name: 'Clean Eating',      nameTh: 'กินคลีน',             icon: '🥦', category: 'maintenance',  calories: 2100, duration: '8 weeks' },
  ];

  get filteredPlans(): DietPlan[] {
    if (this.activeTab === 'all') return this.dietPlans;
    return this.dietPlans.filter(p => p.category === this.activeTab);
  }

  ngOnInit(): void {}

  setTab(tab: 'all' | 'weight-loss' | 'muscle-gain' | 'maintenance'): void {
    this.activeTab = tab;
  }
}
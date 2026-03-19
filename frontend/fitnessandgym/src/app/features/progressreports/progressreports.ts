import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

@Component({
  selector: 'app-progressreports',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './progressreports.html',
  styleUrls: ['./progressreports.css']
})
export class ProgressreportsComponent implements OnInit {
  username = 'diddy';
  activeTab: 'all' | 'fitness' | 'nutrition' | 'body' = 'all';

  reports: ProgressReport[] = [
    { id: 1, title: 'Weight',        titleTh: 'น้ำหนัก',         icon: '⚖️',  date: '19 Mar 2026', value: 72,   unit: 'kg',    trend: 'down'   },
    { id: 2, title: 'Body Fat',      titleTh: 'ไขมันในร่างกาย',  icon: '📉',  date: '19 Mar 2026', value: 18,   unit: '%',     trend: 'down'   },
    { id: 3, title: 'Muscle Mass',   titleTh: 'มวลกล้ามเนื้อ',   icon: '💪',  date: '19 Mar 2026', value: 55,   unit: 'kg',    trend: 'up'     },
    { id: 4, title: 'Calories Burn', titleTh: 'แคลอรี่เผาผลาญ', icon: '🔥',  date: '19 Mar 2026', value: 520,  unit: 'kcal',  trend: 'up'     },
    { id: 5, title: 'Steps',         titleTh: 'ก้าวเดิน',        icon: '👟',  date: '19 Mar 2026', value: 8500, unit: 'steps', trend: 'stable' },
    { id: 6, title: 'Water Intake',  titleTh: 'การดื่มน้ำ',      icon: '💧',  date: '19 Mar 2026', value: 2.5,  unit: 'L',     trend: 'stable' },
  ];

  get filteredReports(): ProgressReport[] {
    return this.reports;
  }

  ngOnInit(): void {}

  setTab(tab: 'all' | 'fitness' | 'nutrition' | 'body'): void {
    this.activeTab = tab;
  }

  getTrendLabel(trend: string): string {
    if (trend === 'up')   return '↑ Improving';
    if (trend === 'down') return '↓ Decreasing';
    return '→ Stable';
  }
}
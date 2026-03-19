import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface ServiceItem {
  name: string;
  category: string;
  price: number;
  duration: number;
  isArchived: boolean;
}

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './classes.html',
  styleUrls: ['./classes.css']
})
export class ClassesComponent {
  // ข้อมูลจำลองตามรูปภาพ
  services: ServiceItem[] = [
    { name: 'armevil', category: 'Class', price: 200, duration: 60, isArchived: false },
    { name: 'mix', category: 'Class', price: 100, duration: 60, isArchived: true },
    { name: 'Bosskub', category: 'Class', price: 200, duration: 30, isArchived: true }
  ];

  // เก็บสถานะ Tab ที่เลือก (Default คือ Services)
  activeTab = 'Services';
  tabs = ['Services', 'Pricing', 'Coupons', 'Orders'];

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
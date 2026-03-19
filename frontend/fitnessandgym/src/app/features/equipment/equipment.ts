import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

export interface Equipment {
  id: number;
  name: string;
  nameTh: string;
  icon: string;
  status: 'available' | 'inuse';
}

@Component({
  selector: 'app-equipment',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './equipment.html',
  styleUrls: ['./equipment.css']
})
export class EquipmentComponent implements OnInit {
  username = 'diddy';
  activeTab: 'all' | 'available' | 'inuse' = 'all';

  equipmentList: Equipment[] = [
    { id: 1, name: 'Treadmill',   nameTh: 'ลู่วิ่ง',          icon: '🏃', status: 'available' },
    { id: 2, name: 'Dumbbell',    nameTh: 'ดัมเบล',            icon: '🏋️', status: 'available' },
    { id: 3, name: 'Bench Press', nameTh: 'ม้านอนยกน้ำหนัก',  icon: '🛋️', status: 'inuse'     },
    { id: 4, name: 'Kettlebell',  nameTh: 'เคตเทิลเบล',        icon: '⚙️', status: 'available' },
    { id: 5, name: 'Pull-up Bar', nameTh: 'บาร์โหน',           icon: '🤸', status: 'inuse'     },
  ];

  get filteredEquipment(): Equipment[] {
    if (this.activeTab === 'all') return this.equipmentList;
    return this.equipmentList.filter(item => item.status === this.activeTab);
  }

  ngOnInit(): void {}

  setTab(tab: 'all' | 'available' | 'inuse'): void {
    this.activeTab = tab;
  }
}
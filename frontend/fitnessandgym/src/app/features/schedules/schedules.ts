import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

export interface Booking {
  id: number;
  title: string;
  date: string;
  time: string;
  status: 'upcoming' | 'past';
}

@Component({
  selector: 'app-schedules',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './schedules.html',
  styleUrls: ['./schedules.css']
})
export class SchedulesComponent implements OnInit {
  username = 'diddy';
  activeTab: 'upcoming' | 'past' = 'upcoming';

  bookings: Booking[] = [];

  get filteredBookings(): Booking[] {
    return this.bookings.filter(b => b.status === this.activeTab);
  }

  ngOnInit(): void {}

  setTab(tab: 'upcoming' | 'past'): void {
    this.activeTab = tab;
  }

  viewSchedule(): void {
    console.log('View schedule for', this.username);
  }
}
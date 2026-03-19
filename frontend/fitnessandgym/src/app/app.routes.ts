import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'schedule',
    pathMatch: 'full'
  },
  {
    path: 'schedule',
    loadComponent: () =>
      import('./features/schedules/schedules').then(m => m.SchedulesComponent)
  },
  {
    path: '**',
    redirectTo: 'schedule'
  }
];
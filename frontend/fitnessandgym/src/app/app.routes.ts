import { Routes } from '@angular/router';
import { EquipmentComponent }      from './features/equipment/equipment';
import { DietplansComponent }      from './features/dietplans/dietplans';
import { ProgressreportsComponent } from './features/progressreports/progressreports';

export const routes: Routes = [
  { path: '',                redirectTo: 'equipment', pathMatch: 'full' },
  { path: 'equipment',       component: EquipmentComponent },
  { path: 'dietplans',       component: DietplansComponent },
  { path: 'progressreports', component: ProgressreportsComponent },
];
import { Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication';
import { DietplansComponent } from './features/dietplans/dietplans';
import { EquipmentComponent } from './features/equipment/equipment';
import { ProfileComponent } from './features/profile/profile';
import { ProgressreportsComponent } from './features/progressreports/progressreports';
import { AuthGuard } from './guards/auth.guard';


export const routes: Routes = [
  { path: '',                redirectTo: 'login',         pathMatch: 'full' },
  { path: 'login',           component: AuthenticationComponent },
  { path: 'equipment',       component: EquipmentComponent,       canActivate: [AuthGuard] },
  { path: 'dietplans',       component: DietplansComponent,       canActivate: [AuthGuard] },
  { path: 'progressreports', component: ProgressreportsComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
];
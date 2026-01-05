import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'home', loadComponent: () => import('./pages/home/home').then((m) => m.Home) },
  { path: 'about', loadComponent: () => import('./pages/about/about').then((m) => m.About) },
  {path: 'user-data', loadComponent: () => import('./components/user-data/user-data').then((m) => m.UserData) },
];

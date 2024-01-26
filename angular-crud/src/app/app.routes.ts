import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'modify-client/:id',
    loadComponent: () => import('./components/modify-client/modify-client.component').then(m => m.ModifyClientComponent)
  },
  {
    path: 'add-client',
    loadComponent: () => import('./components/add-client/add-client.component').then(m => m.AddClientComponent)
  }
];

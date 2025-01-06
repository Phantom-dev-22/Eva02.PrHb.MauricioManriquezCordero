import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./page/home/home.page').then((m) => m.HomePage), 
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'gestioncitas',
    loadComponent: () => import('./page/gestioncitas/gestioncitas.page').then( m => m.GestionPage) 
  },
  {
    path: 'configuracion',
    loadComponent: () => import('./page/configuracion/configuracion.page').then( m => m.ConfiguracionPage)
  },
  
];

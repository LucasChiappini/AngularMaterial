import { Routes } from '@angular/router';
import { HomePage } from './pages/home/home.page';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', title: 'Home', component: HomePage },
  {
    path: 'lista',
    title: 'Lista de usuarios',
    loadComponent: () => import('./pages/usuarios/listar-usuarios/listar-usuarios.page'),
  },
  {
    path: 'formulario',
    title: 'Crear usuario',
    loadComponent: () => import('./pages/usuarios/crear-usuario/crear-usuario.page'),
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

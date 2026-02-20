import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'productos', loadComponent: () => import('./features/products/products.component').then(m => m.ProductsComponent) },
    { path: 'servicios', loadComponent: () => import('./features/services/services.component').then(m => m.ServicesComponent) },
    { path: 'metodologia', loadComponent: () => import('./features/methodology/methodology.component').then(m => m.MethodologyComponent) },
    { path: 'contacto', loadComponent: () => import('./features/contact/contact.component').then(m => m.ContactComponent) },
    { path: '**', redirectTo: '' }
];

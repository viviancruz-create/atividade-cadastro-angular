import { Formulario } from './formulario/formulario';
import { HomeComponent } from './home-component/home-component';
import { Lista } from './lista/lista';
import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'cadastro',
        component: Formulario
    },
    {
        path: 'cadastro/:id',
        component: Formulario
    },
    {
        path: 'lista',
        component: Lista
    }
];

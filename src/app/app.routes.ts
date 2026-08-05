import { Routes } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { HomeComponent } from './component/home-component/home-component';


export const routes: Routes = [
    {
        path:'',
        redirecto: 'home',
        pathMatch: 'full'
    },
   
    {
        path:'home',
        component: HomeComponent
    },
   
    {
        path:'cadastro',
        component: Formulario
    },
];

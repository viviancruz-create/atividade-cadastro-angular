import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { HomeComponent } from '../home-component/home-component';

@Component({
  selector: 'app-cadastro',
  imports: [RouterLink,Formulario,HomeComponent],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {}

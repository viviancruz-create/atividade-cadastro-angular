import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Formulario } from './formulario/formulario';
import { HomeComponent } from './home-component/home-component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Formulario, HomeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Formulario');
}

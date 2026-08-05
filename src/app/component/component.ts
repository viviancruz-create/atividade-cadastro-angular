import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component',
  imports: [RouterLink, RouterOutlet, FormsModule ],
  templateUrl: './component.html',
  styleUrl: './component.css',
})
export class Component {}

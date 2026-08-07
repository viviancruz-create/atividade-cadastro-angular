import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa-service';
import { Pessoa } from '../models/pessoa'; // Certifique-se de que o caminho existe!

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './lista.html',
  styleUrl: './lista.css',
})
export class Lista implements OnInit {
  // Propriedade para armazenar o array
  listaPessoa: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) {}

  // Implementação obrigatória do OnInit
  ngOnInit(): void {
    this.carregarPessoas();
  }

  // Método renomeado para não conflitar com a propriedade listaPessoa
  carregarPessoas(): void {
    this.listaPessoa = this.pessoaService.listar();
  }
}
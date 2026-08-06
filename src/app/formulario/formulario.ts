import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa-service';

@Component({
  selector: 'app-formulario',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  id = 0
  nome = ''
  email= ''
  cpf= ''
  dataNascimento= ''

  constructor(private pessoasService: PessoaService){}

  save(){
    
    console.log(this.nome, this.email, this.cpf, this.dataNascimento)
    
    this.pessoasService.adicionar({
      id: 0,
      nome: this.nome,
      cpf: this.cpf,
      email: this.email,
      dataNascimento: this.dataNascimento,
    })
  }
}

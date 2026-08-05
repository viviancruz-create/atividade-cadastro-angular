import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa-service';
@Component({
  selector: 'app-formulario',
  imports: [RouterLink, RouterOutlet, FormsModule ],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome = ''
  email= ''
  cpf= ''
  datanascimento= ''

  constructor(private pessoasService: PessoaService){}

  save(){
    this.pessoasService.adicionar({
      id: 1,
      nome: this.nome,
      cpf:this.cpf,
      email: this.email,
      this.datanascimento: this.dataNascimento
    })
  }
}

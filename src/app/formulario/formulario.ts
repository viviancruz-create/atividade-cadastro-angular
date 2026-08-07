import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../services/pessoa-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formulario',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome = ''
  email= ''
  cpf= ''
  dataNascimento= ''
  uf= ''
  municipio= ''
  idPessoaEdit = 0
  edit = false


  constructor(private route: ActivatedRoute, private pessoaService: PessoaService) { }

  save(){
    
    const pessoa = new Pessoa()
    pessoa.nome = this.nome
    pessoa.email = this.email
    pessoa.cpf = this.cpf
    pessoa.dataNascimento = this.dataNascimento

    if (this.edit) {
      pessoa.id = this.idPessoaEdit
      this.pessoaService.editar(pessoa)
      this.edit = false
    } else{
      pessoa.id = this.pessoasService.listar().length +1,
     
      this.pessoasService.adicionar(
      
      /*  {
      
        nome: this.nome,
        cpf: this.cpf,
        email: this.email,
        dataNascimento: this.dataNascimento,
      )
    } */
    
      )
   
    }

    this.limparAtributos()
  }
 
  alterar(pessoa: Pessoa) {
    if (confirm("Tem certeza que deseja Excluir a Pessoa?")) {
      this.pessoaService.editar(pessoa)
 
  }
}

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PessoaService } from '../../services/pessoa-service';
import { Pessoa } from '../../models/pessoa';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  nome = ''
  email = ''
  cpf = ''
  dataNascimento = ''
  idPessoaEdit = 0
  edit = false

  constructor(private route: ActivatedRoute, private pessoaService: PessoaService) { }

  limpaAtributos() {
    this.nome = ''
    this.email = ''
    this.cpf = ''
    this.dataNascimento = ''
  }

  carregaAtributos(pessoa: Pessoa) {
    this.nome = String(pessoa.nome)
    this.email = String(pessoa.email)
    this.cpf = String(pessoa.cpf)
    this.dataNascimento = String(pessoa.dataNascimento)
  }

  ngOnInit() {
    const idPessoa = this.route.snapshot.paramMap.get('id')

    this.idPessoaEdit = Number(idPessoa)

    if (idPessoa) {
      this.edit = true

      this.pessoaService.buscarPorId(Number(idPessoa))
        .subscribe(objPessoa => {
          if (objPessoa) {
            this.carregaAtributos({ ...objPessoa })
          }
        })
    }

  }

  save() {

    const pessoa = new Pessoa()
    pessoa.nome = this.nome
    pessoa.email = this.email
    pessoa.cpf = this.cpf
    pessoa.dataNascimento = this.dataNascimento

    if (this.edit) {
      pessoa.id = this.idPessoaEdit
      this.pessoaService.editar(pessoa)
      this.edit = false
    } else {
      pessoa.id = this.pessoaService.tamanhoArray() + 1, //ARMENGUE PARA GERAR ID

        this.pessoaService.adicionar(
          pessoa
          /*{
          id: this.pessoaService.tamanhoArray() + 1, //ARMENGUE PARA GERAR ID
          nome: this.nome,
          cpf: this.cpf,
          email: this.email,
          dataNascimento: this.dataNascimento
        }*/

        )
    }

    this.limpaAtributos()
  }

  alterar(pessoa: Pessoa) {
    if (confirm("Tem certeza que deseja Excluir a Pessoa?")) {
      this.pessoaService.editar(pessoa)
    }
  }

}

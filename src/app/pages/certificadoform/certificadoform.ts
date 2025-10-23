import { Component } from '@angular/core';
import { PrimaryButton } from "../../_components/primary-button/primary-button";
import { SecondaryButton } from "../../secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../_services/certificado';

@Component({
  selector: 'app-certificadoform',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificadoform.html',
  styleUrl: './certificadoform.css'
})
export class Certificadoform {

  certificado: Certificado = {
    nome: string = '';
    dataEmissao: '';
    atividade: string = '';

  };

  constructor(private Certificado: Certificado){ }


  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }
  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0;
  }
  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }
  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1)
  }
  submit() {
    if (!this.formValido()) {
      return;
    }

    this.certificado.dataEmissao = this.dataAtual();
 this.Certificado.adicionarCertificado(this.Certificado);
 console.log(this.certificado);
  }
  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = '${dia}/${mes}/${ano}';
    return dataFormatada;

  }}

}



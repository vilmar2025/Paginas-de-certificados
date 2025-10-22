import { Injectable } from '@angular/core';
import { certificado } from '..//interfaces/certificado';

@Injectable({
  providedIn: 'root'
})
export class Certificado {
  certificados: Certificado[] = [];
  constructor(){ }
    adicionarCertificado( certificado: Certificado){
this.certificados.push(certificado);
    }

  }

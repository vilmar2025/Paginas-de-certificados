import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from "../../secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { Certificado } from '../../_services/certificado';
@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class certificado implements OnInit {
constructor (private certificado: Certificado) { }
ngOnInit(): void {
  console.log(this.certificado.certificados);

}
}

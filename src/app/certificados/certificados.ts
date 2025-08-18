import { Component } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Itemcertificado } from "../_components/itemcertificado/itemcertificado";

@Component({
  selector: 'app-certificados',
  imports: [Itemcertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados{

}

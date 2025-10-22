import { Component } from '@angular/core';
import { Itemcertificado } from "../_components/itemcertificado/itemcertificado";
import { SecondaryButton} from '../secondary-button/secondary-button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificados',
  imports: [Itemcertificado],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados  {

}

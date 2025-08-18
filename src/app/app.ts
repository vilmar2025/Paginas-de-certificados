import { Component} from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar";
import{CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PrimaryButton } from "./_components/primary-button/primary-button";
import { SecondaryButton } from "./secondary-button/secondary-button";
import { Itemcertificado } from "./_components/itemcertificado/itemcertificado";
import { BaseUi } from "./_components/base-ui/base-ui";
import { Certificados } from "./certificados/certificados";
import { Certificadoform } from "./pages/certificadoform/certificadoform";
import { Certificado } from "./pages/certificado/certificado";
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PrimaryButton, SecondaryButton, Itemcertificado, BaseUi, Certificados, Certificadoform, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 title = 'Gerador de Certificado';
 exibeNavbar: boolean = true;
}

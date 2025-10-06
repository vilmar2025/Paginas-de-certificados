import { Component} from '@angular/core';
import { NavbarComponent } from "./_components/navbar/navbar";
import{CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';



import { BaseUi } from "./_components/base-ui/base-ui";



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
 title = 'Gerador de Certificado';
 exibeNavbar: boolean = true;
}

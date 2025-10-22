import { Component } from '@angular/core';
import { SecondaryButton } from "../../secondary-button/secondary-button";
import { Router } from "@angular/router";

@Component({
  selector: 'app-itemcertificado',
  imports: [SecondaryButton],
 templateUrl: './itemcertificado.html',
  styleUrl: './itemcertificado.css'
})
export class Itemcertificado {

id: string = '6'
constructor(private router: Router) {}


redirecionaCertificado() {
  this.router.navigate(['/certificados',2]);
}
}

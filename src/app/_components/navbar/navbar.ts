import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class NavbarComponent implements OnInit {

  ngOnInit(): void {
this.mensagem();
  }

   mensagem() {
    console.log('meu componente navbar iniciou');
  }
}

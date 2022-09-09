import { Router } from '@angular/router';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css'],
})
export class CabecalhoComponent implements OnInit {
  menu = false;
  user$ = this.usuarioService.retornaUsuario();

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  exibeMenu() {
    this.menu = !this.menu;
  }

  navegaParaHome() {
    this.router.navigate(['pagina-home']);
  }

  navegaParaDashboard() {
    this.router.navigate(['pagina-dashboard']);
  }

  logout() {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }

  ngOnInit(): void {}
}

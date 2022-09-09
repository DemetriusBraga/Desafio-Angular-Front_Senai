import { UsuarioService } from './usuario/usuario.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor(
    private httpClient: HttpClient,
    private usuarioService: UsuarioService
  ) {}

  autenticar(
    usuario: string,
    senha: string | number
  ): Observable<HttpResponse<any>> {
    return this.httpClient
      .post(
        'http://localhost:3000/user/login',
        {
          userName: usuario,
          password: senha,
        },
        { observe: 'response' }
      )
      .pipe(
        tap((response) => {
          const autenticacaoToken =
            response.headers.get('x-access-token') ?? '';
          this.usuarioService.salvaToken(autenticacaoToken);
        })
      );
  }
}

import { pluck } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { VeiculosDadosAPI } from './veiculo-dados';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoDadosService {
  constructor(private httpClient: HttpClient) {}

  buscaVeiculoDados(valor?: string) {
    const params = valor ? new HttpParams().append('valor', valor) : undefined;
    return this.httpClient
      .get<VeiculosDadosAPI>(`${API}/vehicleData`, {
        params,
      })
      .pipe(pluck('vehicleData'));
  }
}

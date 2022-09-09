import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Veiculo, VeiculosAPI } from './veiculo';
import { pluck } from 'rxjs';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root',
})
export class VeiculoService {
  constructor(private httpClient: HttpClient) {}

  modeloVeiculos() {
    return this.httpClient
      .get<VeiculosAPI>(`${API}/vehicle`)
      .pipe(pluck('vehicles'));
  }

  veiculoId(id: string) {
    return this.httpClient.get<Veiculo>(`${API}/vehicle/${id}`);
  }
}

import { VeiculoService } from './../veiculo/veiculo.service';
import { Component, OnInit } from '@angular/core';
import { Veiculo } from '../veiculo/veiculo';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  veiculos$ = this.veiculoService.modeloVeiculos();
  veiculoId!: string;
  veiculoSelecionado!: Veiculo;

  constructor(private veiculoService: VeiculoService) {}

  enviaVeiculoId(id: string) {
    this.veiculoService.veiculoId(id).subscribe((veiculoSelecionado) => {
      this.veiculoSelecionado = veiculoSelecionado;
    });
  }

  ngOnInit(): void {}
}

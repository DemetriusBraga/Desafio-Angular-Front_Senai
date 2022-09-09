import { VeiculoDadosService } from './../../veiculo/veiculo-dados.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { distinctUntilChanged, filter, switchMap } from 'rxjs';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css'],
})
export class TabelaComponent implements OnInit {
  valorDoInput!: string;
  tabelaDeDados = new FormControl();
  filtroPeloInput$ = this.tabelaDeDados.valueChanges.pipe(
    filter(
      (valorDigitado) => valorDigitado.length >= 3 || valorDigitado.length
    ),
    distinctUntilChanged(),
    switchMap((valorDigitado) =>
      this.veiculoDadosService.buscaVeiculoDados(valorDigitado)
    )
  );

  constructor(private veiculoDadosService: VeiculoDadosService) {}

  ngOnInit(): void {}
}

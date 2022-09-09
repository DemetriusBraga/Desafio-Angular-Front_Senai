import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaDashboardRoutingModule } from './pagina-dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TabelaComponent } from './tabela-de-dados/tabela/tabela.component';

@NgModule({
  declarations: [DashboardComponent, TabelaComponent],
  imports: [
    CommonModule,
    PaginaDashboardRoutingModule,
    CabecalhoModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class PaginaDashboardModule {}

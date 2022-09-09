import { CabecalhoModule } from './../componentes/cabecalho/cabecalho.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaHomeRoutingModule } from './pagina-home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, PaginaHomeRoutingModule, CabecalhoModule],
})
export class PaginaHomeModule {}

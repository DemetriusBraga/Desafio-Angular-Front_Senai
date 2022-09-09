import { MensagemModule } from './../componentes/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AcessoComponent } from './acesso/acesso.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, AcessoComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, MensagemModule],
  exports: [LoginComponent],
})
export class LoginModule {}

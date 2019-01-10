import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { routing } from './app.routing';
import { MeuperfilComponent } from './meuperfil/meuperfil.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { FormprojetosComponent } from './projetos/formprojetos/formprojetos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PessoaComponent,
    ProjetosComponent,
    MeuperfilComponent,
    EquipamentosComponent,
    EmpresasComponent,
    FormprojetosComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

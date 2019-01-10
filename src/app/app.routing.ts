import { Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/core'

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProjetosComponent } from './projetos/projetos.component';
import { MeuperfilComponent } from './meuperfil/meuperfil.component';
import { EquipamentosComponent } from './equipamentos/equipamentos.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { PessoaComponent } from './pessoa/pessoa.component';
import { FormprojetosComponent } from './projetos/formprojetos/formprojetos.component';

const app_routes: Routes = [
    {path: 'projetos', component: ProjetosComponent},
    {path: 'projetos/:id', component: FormprojetosComponent},
    {path: 'login', component: LoginComponent},
    {path: 'meuperfil', component: MeuperfilComponent},
    {path: 'equipamentos', component: EquipamentosComponent},
    {path: 'empresas', component: EmpresasComponent},
    {path: 'pessoas', component: PessoaComponent},
    {path:'', component: HomeComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(app_routes);




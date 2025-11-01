// cadastro-usuario/siteangular/src/app/app-routing.module.ts
// Módulo de roteamento da aplicação Angular

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { BemVindoComponent } from './bem-vindo/bem-vindo.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';

const routes: Routes = [
  { path: '', redirectTo: '/cadastro', pathMatch: 'full' },
  { path: 'cadastro', component: CadastroUsuarioComponent },
  { path: 'bem-vindo', component: BemVindoComponent },
  { path: 'editar/:id', component: EditarUsuarioComponent },
  { path: '**', redirectTo: '/cadastro' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
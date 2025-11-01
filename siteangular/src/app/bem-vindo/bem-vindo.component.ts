// cadastro-usuario/siteangular/src/app/bem-vindo/bem-vindo.component.ts
// Componente para exibir mensagem de boas-vindas após cadastro bem-sucedido

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bem-vindo',
  templateUrl: './bem-vindo.component.html',
  styleUrls: ['./bem-vindo.component.css']
})
export class BemVindoComponent implements OnInit {
  
  nomeUsuario: string = '';
  usuarioId: string = '';
  
  constructor(private router: Router) { }
  
  ngOnInit(): void {
    const nome = localStorage.getItem('usuarioNome');
    const id = localStorage.getItem('usuarioId');
    
    if (!nome || !id) {
      this.router.navigate(['/cadastro']);
      return;
    }
    
    this.nomeUsuario = nome;
    this.usuarioId = id;
  }
  
  voltarCadastro(): void {
    localStorage.removeItem('usuarioNome');
    localStorage.removeItem('usuarioId');
    this.router.navigate(['/cadastro']);
  }
  
  editarCadastro(): void {
    this.router.navigate(['/editar', this.usuarioId]);
  }
}
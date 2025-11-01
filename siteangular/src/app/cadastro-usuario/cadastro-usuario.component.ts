// cadastro-usuario/siteangular/src/app/cadastro-usuario/cadastro-usuario.component.ts
// Componente para formulário de cadastro de novos usuários

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService, Usuario } from '../services/usuario.service';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent {
  
  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';
  carregando: boolean = false;
  
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }
  
  cadastrar(): void {
    this.mensagemErro = '';
    
    if (!this.nome || !this.email || !this.senha) {
      this.mensagemErro = 'Por favor, preencha todos os campos!';
      return;
    }
    
    if (!this.email.includes('@')) {
      this.mensagemErro = 'Por favor, insira um email válido!';
      return;
    }
    
    this.carregando = true;
    
    const usuario: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
    
    this.usuarioService.criar(usuario).subscribe(
      (resposta: any) => {
        this.carregando = false;
        
        if (resposta.usuario && resposta.usuario.id) {
          localStorage.setItem('usuarioId', resposta.usuario.id);
          localStorage.setItem('usuarioNome', this.nome);
        }
        
        this.router.navigate(['/bem-vindo']);
      },
      (erro: any) => {
        this.carregando = false;
        this.mensagemErro = erro.error?.mensagem || 'Erro ao cadastrar usuário!';
      }
    );
  }
  
  limpar(): void {
    this.nome = '';
    this.email = '';
    this.senha = '';
    this.mensagemErro = '';
  }
}
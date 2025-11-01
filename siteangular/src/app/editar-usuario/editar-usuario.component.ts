// cadastro-usuario/siteangular/src/app/editar-usuario/editar-usuario.component.ts
// Componente para edição de dados de usuário cadastrado

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsuarioService, Usuario } from '../services/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  
  id: string = '';
  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';
  mensagemSucesso: string = '';
  carregando: boolean = false;
  
  constructor(
    private usuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) { }
  
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      
      if (!this.id) {
        this.router.navigate(['/cadastro']);
        return;
      }
      
      this.carregarUsuario();
    });
  }
  
  carregarUsuario(): void {
    this.carregando = true;
    
    this.usuarioService.buscarPorId(this.id).subscribe(
      (usuario: Usuario) => {
        this.carregando = false;
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
      },
      (erro: any) => {
        this.carregando = false;
        this.mensagemErro = erro.error?.mensagem || 'Erro ao carregar dados do usuário!';
      }
    );
  }
  
  atualizar(): void {
    this.mensagemErro = '';
    this.mensagemSucesso = '';
    
    if (!this.nome || !this.email || !this.senha) {
      this.mensagemErro = 'Por favor, preencha todos os campos!';
      return;
    }
    
    if (!this.email.includes('@')) {
      this.mensagemErro = 'Por favor, insira um email válido!';
      return;
    }
    
    this.carregando = true;
    
    const usuarioAtualizado: Usuario = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };
    
    this.usuarioService.atualizar(this.id, usuarioAtualizado).subscribe(
      (resposta: any) => {
        this.carregando = false;
        this.mensagemSucesso = 'Cadastro atualizado com sucesso!';
        localStorage.setItem('usuarioNome', this.nome);
        
        setTimeout(() => {
          this.router.navigate(['/bem-vindo']);
        }, 2000);
      },
      (erro: any) => {
        this.carregando = false;
        this.mensagemErro = erro.error?.mensagem || 'Erro ao atualizar cadastro!';
      }
    );
  }
  
  deletar(): void {
    if (!confirm('Tem certeza que deseja deletar sua conta? Esta ação não pode ser desfeita.')) {
      return;
    }
    
    this.mensagemErro = '';
    this.mensagemSucesso = '';
    this.carregando = true;
    
    this.usuarioService.deletar(this.id).subscribe(
      (resposta: any) => {
        this.carregando = false;
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioId');
        this.router.navigate(['/cadastro']);
      },
      (erro: any) => {
        this.carregando = false;
        this.mensagemErro = erro.error?.mensagem || 'Erro ao deletar usuário!';
      }
    );
  }
  
  cancelar(): void {
    this.router.navigate(['/bem-vindo']);
  }
}
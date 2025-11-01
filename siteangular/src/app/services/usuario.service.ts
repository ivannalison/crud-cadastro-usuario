// cadastro-usuario/siteangular/src/app/services/usuario.service.ts
// Serviço Angular para comunicação HTTP com backend (CRUD de usuários)

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Usuario {
  id?: string;
  nome: string;
  email: string;
  senha: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  private baseUrl = 'http://localhost:3000/api/usuarios';
  
  constructor(private http: HttpClient) { }
  
  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.baseUrl);
  }
  
  buscarPorId(id: string): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.baseUrl}/${id}`);
  }
  
  criar(usuario: Usuario): Observable<any> {
    return this.http.post(this.baseUrl, usuario);
  }
  
  atualizar(id: string, usuario: Usuario): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, usuario);
  }
  
  deletar(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }
}
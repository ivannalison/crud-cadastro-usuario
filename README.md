# 🚀 Sistema de Cadastro e Gerenciamento de Usuários

<div align="center">

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

**Sistema Fullstack para gerenciamento completo de usuários com CRUD, validações e interface moderna**

[Demo](#-demonstração) • [Funcionalidades](#-funcionalidades) • [Instalação](#-instalação) • [Tecnologias](#-tecnologias) • [Contato](#-contato)

</div>

---

## 📋 Sobre o Projeto

Sistema web fullstack desenvolvido com **Angular** no frontend e **Node.js/Express** no backend, permitindo cadastro, listagem, edição e exclusão de usuários com persistência em arquivo JSON. O projeto foi desenvolvido com foco em boas práticas de desenvolvimento, arquitetura modular e experiência do usuário.

### 🎯 Objetivos

- ✅ Implementar CRUD completo de usuários
- ✅ Criar interface responsiva e intuitiva
- ✅ Validar dados no frontend e backend
- ✅ Aplicar arquitetura modular e escalável
- ✅ Demonstrar integração frontend-backend

---

## ✨ Funcionalidades

### 🔹 Cadastro de Usuários
- Formulário com validação em tempo real
- Campos obrigatórios: Nome, Email e Senha
- Validação de formato de email
- Mensagens de erro personalizadas
- Feedback visual de loading

### 🔹 Listagem de Usuários
- Visualização de todos os usuários cadastrados
- Dados armazenados em JSON local
- Consulta via API REST

### 🔹 Edição de Cadastro
- Atualização de dados existentes
- Formulário pré-preenchido
- Confirmação de atualização
- Sincronização com localStorage

### 🔹 Exclusão de Usuário
- Confirmação antes de deletar
- Remoção permanente do registro
- Limpeza automática de dados locais

### 🔹 Página de Boas-Vindas
- Mensagem personalizada com nome do usuário
- Botão de acesso rápido para edição
- Opção de novo cadastro

### 🔹 Navegação e UX
- Rotas protegidas e redirecionamentos inteligentes
- Transições suaves entre páginas
- Design moderno com gradientes
- Interface responsiva

---

## 🛠️ Tecnologias

### **Frontend**
| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| Angular | 17.0+ | Framework principal |
| TypeScript | 5.2+ | Linguagem de programação |
| RxJS | 7.8+ | Programação reativa |
| FormsModule | - | Gerenciamento de formulários |
| HttpClient | - | Requisições HTTP |
| Router | - | Sistema de rotas |

### **Backend**
| Tecnologia | Versão | Descrição |
|-----------|--------|-----------|
| Node.js | 18.0+ | Runtime JavaScript |
| Express | 4.18+ | Framework web |
| CORS | 2.8+ | Controle de acesso |
| Body-Parser | 1.20+ | Parse de requisições |
| File System (fs) | - | Manipulação de arquivos |

### **Ferramentas de Desenvolvimento**
- Git & GitHub - Versionamento
- Visual Studio Code - IDE
- Postman - Testes de API
- Angular CLI - Geração de código

---

## 📁 Estrutura do Projeto
```
cadastro-usuario/
│
├── backend/                          # Servidor Node.js/Express
│   ├── server.js                     # Configuração do servidor e rotas CRUD
│   ├── usuarios.json                 # Base de dados (arquivo JSON)
│   └── package.json                  # Dependências do backend
│
└── siteangular/                      # Aplicação Angular
    ├── src/
    │   ├── app/
    │   │   ├── cadastro-usuario/     # Componente de cadastro
    │   │   │   ├── cadastro-usuario.component.ts
    │   │   │   ├── cadastro-usuario.component.html
    │   │   │   └── cadastro-usuario.component.css
    │   │   │
    │   │   ├── bem-vindo/            # Componente de boas-vindas
    │   │   │   ├── bem-vindo.component.ts
    │   │   │   ├── bem-vindo.component.html
    │   │   │   └── bem-vindo.component.css
    │   │   │
    │   │   ├── editar-usuario/       # Componente de edição
    │   │   │   ├── editar-usuario.component.ts
    │   │   │   ├── editar-usuario.component.html
    │   │   │   └── editar-usuario.component.css
    │   │   │
    │   │   ├── services/             # Serviços Angular
    │   │   │   └── usuario.service.ts
    │   │   │
    │   │   ├── app.module.ts         # Módulo principal
    │   │   ├── app-routing.module.ts # Configuração de rotas
    │   │   ├── app.component.ts      # Componente raiz
    │   │   ├── app.component.html
    │   │   └── app.component.css
    │   │
    │   ├── main.ts                   # Inicialização da aplicação
    │   ├── index.html                # HTML principal
    │   └── styles.css                # Estilos globais
    │
    ├── angular.json                  # Configuração do Angular CLI
    ├── package.json                  # Dependências do frontend
    └── tsconfig.json                 # Configuração do TypeScript
```

---

## 🚀 Instalação

### **Pré-requisitos**

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) (v18 ou superior)
- [Angular CLI](https://angular.io/cli) (v17 ou superior)
- [Git](https://git-scm.com/)

### **1. Clonar o Repositório**
```bash
git clone https://github.com/seu-usuario/cadastro-usuarios.git
cd cadastro-usuarios
```

### **2. Configurar o Backend**
```bash
cd backend
npm install
node server.js
```

✅ **Servidor backend rodando em:** `http://localhost:3000`

### **3. Configurar o Frontend**

Abra um **novo terminal** e execute:
```bash
cd siteangular
npm install
ng serve
```

✅ **Aplicação Angular rodando em:** `http://localhost:4200`

---

## 🎮 Como Usar

### **1. Cadastrar Novo Usuário**

1. Acesse `http://localhost:4200/cadastro`
2. Preencha os campos: Nome, Email e Senha
3. Clique em **Cadastrar**
4. Você será redirecionado para a página de boas-vindas

### **2. Visualizar Boas-Vindas**

- A página exibe seu nome personalizado
- Botão **Editar Cadastro**: abre formulário de edição
- Botão **Novo Cadastro**: permite cadastrar outro usuário

### **3. Editar Cadastro**

1. Na página de boas-vindas, clique em **Editar Cadastro**
2. Altere os dados desejados
3. Clique em **Atualizar** para salvar
4. Ou clique em **Cancelar** para voltar

### **4. Deletar Usuário**

1. Na página de edição, clique em **Deletar Conta**
2. Confirme a exclusão
3. O usuário será removido permanentemente

---

## 🔌 Rotas da API

### **Backend - Node.js/Express**

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/api/usuarios` | Lista todos os usuários |
| `GET` | `/api/usuarios/:id` | Busca usuário por ID |
| `POST` | `/api/usuarios` | Cria novo usuário |
| `PUT` | `/api/usuarios/:id` | Atualiza usuário |
| `DELETE` | `/api/usuarios/:id` | Deleta usuário |

### **Frontend - Angular**

| Rota | Componente | Descrição |
|------|-----------|-----------|
| `/` | Redirect | Redireciona para `/cadastro` |
| `/cadastro` | CadastroUsuarioComponent | Formulário de cadastro |
| `/bem-vindo` | BemVindoComponent | Página de boas-vindas |
| `/editar/:id` | EditarUsuarioComponent | Formulário de edição |

---

## 📊 Demonstração

# 🚀 Telas do Projeto CRUD de Cadastro de Usuário (Angular)

### **Tela de Cadastro**
![Formulário de Cadastro](siteangular/src/assets/Formulário de cadastro.png)

### **Tela de Edição**
![Formulário de Edição](siteangular/src/assets/Formulário de edição.png)

### **Tela de Boas-Vindas**
![Formulário de Boas-Vindas](siteangular/src/assets/Formulário de boas vindas.png)

---

## 🧪 Testes

### **Testar Backend com Postman/Insomnia**

#### Criar Usuário (POST)
```json
POST http://localhost:3000/api/usuarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "123456"
}
```

#### Listar Usuários (GET)
```
GET http://localhost:3000/api/usuarios
```

#### Buscar por ID (GET)
```
GET http://localhost:3000/api/usuarios/1730483520123
```

#### Atualizar Usuário (PUT)
```json
PUT http://localhost:3000/api/usuarios/1730483520123
Content-Type: application/json

{
  "nome": "João Pedro Silva",
  "email": "joaopedro@email.com",
  "senha": "novaSenha123"
}
```

#### Deletar Usuário (DELETE)
```
DELETE http://localhost:3000/api/usuarios/1730483520123
```

---

## 📈 Melhorias Futuras

- [ ] Autenticação JWT
- [ ] Integração com banco de dados (MySQL/MongoDB)
- [ ] Criptografia de senhas (bcrypt)
- [ ] Upload de foto de perfil
- [ ] Recuperação de senha via email
- [ ] Dashboard administrativo
- [ ] Paginação de usuários
- [ ] Filtros e busca avançada
- [ ] Testes unitários e E2E
- [ ] Deploy em nuvem (Heroku/Vercel)

---

## 🐛 Problemas Conhecidos

- LocalStorage é limpo ao limpar cache do navegador
- Arquivo JSON não suporta acesso concorrente
- Senhas são armazenadas sem criptografia (apenas para desenvolvimento)

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Siga os passos:

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👤 Autor

**Ivan Nalison Cassimiro Xavier**

- GitHub: Ivan Nalison(https://github.com/ivannalison)
- LinkedIn: Ivan Nalison (https://www.linkedin.com/in/ivan-nalison/)
- Email: nalison.cn@gmail.com

---

## 🙏 Agradecimentos

- Professor Valdecir - Orientação do projeto
- Comunidade Angular Brasil
- Documentação oficial do Angular e Node.js

---

<div align="center">

**⭐ Se este projeto foi útil, deixe uma estrela no repositório! ⭐**

Desenvolvido com ❤️ por Ivan Nalison Cassimiro Xavier

</div>

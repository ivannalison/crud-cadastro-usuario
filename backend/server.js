// cadastro-usuario/backend/server.js
// Servidor Node.js/Express com rotas CRUD para gerenciamento de usuários

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Caminho do arquivo JSON
const arquivoUsuarios = path.join(__dirname, 'usuarios.json');

// Função para ler usuários do arquivo JSON
function lerUsuarios() {
  try {
    const dados = fs.readFileSync(arquivoUsuarios, 'utf-8');
    return JSON.parse(dados);
  } catch (erro) {
    return [];
  }
}

// Função para salvar usuários no arquivo JSON
function salvarUsuarios(usuarios) {
  fs.writeFileSync(arquivoUsuarios, JSON.stringify(usuarios, null, 2));
}

// Rota GET: Listar todos os usuários
app.get('/api/usuarios', (req, res) => {
  const usuarios = lerUsuarios();
  res.status(200).json(usuarios);
});

// Rota GET: Buscar usuário por ID
app.get('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const usuarios = lerUsuarios();
  const usuario = usuarios.find(u => u.id === id);
  
  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
});

// Rota POST: Criar novo usuário
app.post('/api/usuarios', (req, res) => {
  const { nome, email, senha } = req.body;
  
  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos' });
  }
  
  const usuarios = lerUsuarios();
  const novoUsuario = {
    id: Date.now().toString(),
    nome,
    email,
    senha
  };
  
  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);
  
  res.status(201).json({ 
    mensagem: 'Cadastro realizado com sucesso!',
    usuario: novoUsuario
  });
});

// Rota PUT: Atualizar usuário existente
app.put('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { nome, email, senha } = req.body;
  
  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos' });
  }
  
  const usuarios = lerUsuarios();
  const indice = usuarios.findIndex(u => u.id === id);
  
  if (indice !== -1) {
    usuarios[indice] = { id, nome, email, senha };
    salvarUsuarios(usuarios);
    res.status(200).json({ 
      mensagem: 'Cadastro atualizado com sucesso!',
      usuario: usuarios[indice]
    });
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
});

// Rota DELETE: Deletar usuário
app.delete('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const usuarios = lerUsuarios();
  const indice = usuarios.findIndex(u => u.id === id);
  
  if (indice !== -1) {
    const usuarioRemovido = usuarios.splice(indice, 1);
    salvarUsuarios(usuarios);
    res.status(200).json({ 
      mensagem: 'Usuário deletado com sucesso!',
      usuario: usuarioRemovido[0]
    });
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
# 🎨 CriArt

Um site de e-commerce para vender produtos e serviços de design, sublimação e confecção personalizada. O projeto é feito com HTML, CSS e JavaScript puro (sem frameworks).

## ⚡ O que tem aqui?

- **Loja online**: Catálogo de produtos (camisas, bonés, almofadas, canecas, etc)
- **Login e Cadastro**: Usuários conseguem criar conta e acessar perfil
- **Carrinho de Compras**: Adicionar/remover produtos
- **Painel Admin**: Gerenciar produtos, filtros e relatórios de vendas
- **Diferentes categorias**: Vestuário, Empresas, Designers, Planos de serviço

## 📁 Arquivos Principais

```
CriArte2.0/
├── index.html                    # Página inicial
├── login.html / cadastro.html    # Login e cadastro
├── perfil.html                   # Perfil do usuário logado
├── produtosCriart.html           # Loja de vestuário
├── empresas.html                 # Produtos para empresas
├── almofadas-canecas.html        # Almofadas e canecas
├── designers-soltos.html         # Portfólio de designers
├── CARRINHOCRIART.html           # Carrinho de compras
├── admin.html                    # Painel do administrador
├── quem-somos-criart.html        # Página sobre nós
│
└── static/                       # Pasta de estilos e scripts
    ├── home2.css                 # Estilos principais
    ├── admin.css                 # Estilos do painel admin
    ├── produtosCriart.css        # Estilos da loja
    ├── scriptfile.js             # Todos os scripts
    └── Img/                      # Imagens do projeto
```

## 🛠️ Tecnologias

- **HTML5** - Estrutura das páginas
- **CSS3** - Estilos e layouts (flexbox, grid, gradientes)
- **JavaScript** - Interações e lógica
- **FontAwesome** - Ícones bonitos
- **Boxicons** - Mais ícones
- **Google Fonts** - Letra Poppins

## 📖 Como Usar

### Na página inicial:
- Clique nas categorias (VESTUÁRIO, COMÉRCIO, INDÚSTRIA, PLANOS, ARTES) para ver produtos
- Use a barra de busca para procurar
- Clique no ícone de usuário para fazer login

### Para comprar:
1. Cadastre-se em `cadastro.html`
2. Faça login em `login.html`
3. Adicione produtos ao carrinho
4. Vá para o carrinho (`CARRINHOCRIART.html`)
5. Proceda ao pagamento

### Se for administrador:
- Acesse `/admin.html`
- Você pode gerenciar produtos, planos e ver vendas

## 🚀 Como Rodar

### Opção 1: Abrir direto no navegador
```bash
# Clique duas vezes em index.html
```

### Opção 2: Com Python
```bash
# Abra a pasta do projeto e execute
python -m http.server 8000

# Depois acesse
http://localhost:8000
```

### Opção 3: Com Node.js
```bash
# Instale http-server
npm install -g http-server

# Execute na pasta do projeto
http-server

# Acesse
http://localhost:8080
```

**Feito com ❤️ por Turma de Programação Web/SenacAL - Dezembro 2025**

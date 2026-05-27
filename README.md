<div align="center">
  <h1>Gustavo Ribeiro — Portfolio Website</h1>
  <p><strong>Portfólio Minimalista, Responsivo e Interativo</strong></p>
  <p>
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
    <img src="https://img.shields.io/badge/GitHub%20API-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub API">
    <img src="https://img.shields.io/badge/license-MIT-blue?style=for-the-badge" alt="MIT License">
  </p>
</div>

---

## Sobre

Portfólio pessoal desenvolvido com **HTML5**, **CSS3** e **JavaScript** puros, projetado para apresentar habilidades, projetos e informações de contato com um visual moderno e minimalista. O site utiliza efeitos de animação, integração dinâmica com a API do GitHub e um formulário de contato funcional.

---

## ✨ Funcionalidades

### Efeitos Visuais
- **Animação de digitação** no título da introdução (efeito typewriter com múltiplas frases)
- **Parallax background** com imagem fixa e transparência suave
- **Animações ao scroll** via AOS (Animate On Scroll) em todas as seções
- **Transições suaves** e hover effects em cards, botões e links

### Integrações
- **GitHub REST API** — carrega dinamicamente os 5 repositórios públicos mais recentes do usuário
- **Cache local** — armazena repos no `localStorage` por 30 minutos para evitar rate limit
- **Quotable.io API** — exibe uma citação inspiradora aleatória no rodapé
- **Formspree** — formulário de contato funcional com validação client-side

### Modal de Projeto
- Clique em qualquer card de projeto abre um modal com descrição completa e link para o GitHub
- Fechamento via botão, clique fora ou tecla `Escape`
- Acessível com atributos ARIA (`aria-hidden`, `aria-modal`, `role="dialog"`)

### Responsividade
- Layout adaptável com **Flexbox** e **CSS Grid**
- Menu de navegação responsivo
- Cards de projetos em grid flexível

---

## 🎨 Design System

### Cores

| Contexto | Cor | Descrição |
|----------|-----|-----------|
| Background principal | `#121212` | Cinza escuro (quase preto) |
| Texto principal | `#e0e0e0` | Cinza claro |
| Texto secundário | `#999999` | Cinza médio |
| Bordas | `#333333` | Cinza escuro |
| Erro | `#ff5555` | Vermelho |
| Destaque | `#ffffff` | Branco puro |

### Tipografia

- **Fonte principal**: `Segoe UI`, Tahoma, Geneva, Verdana, sans-serif
- **Títulos**: peso bold, tamanho variável por seção
- **Corpo**: line-height 1.6 para legibilidade

### Componentes

| Componente | Características |
|------------|-----------------|
| **Header** | Sticky, backdrop-filter blur, sombra suave, transição ao scroll |
| **Logo** | Imagem circular com hover scale + rotate |
| **Nav links** | Padding generoso, border-radius 8px, hover com background |
| **Profile pic** | Circular com borda sutil |
| **Social links** | Ícones Font Awesome, hover com cor de destaque |
| **Stats** | Números grandes + labels, layout em grid |
| **Skills** | Ícones + texto, lista com flex wrap |
| **Project cards** | Glass effect, hover translateY + shadow, fade-in animado |
| **Modal** | Overlay escuro, conteúdo centralizado, botão de fechar |
| **Form** | Labels flutuantes, inputs com foco visual, mensagens de validação |
| **Footer** | Layout flex, ícones sociais, citação com fade-in |

---

## 📁 Estrutura do Projeto

```
newportifolio/
├── index.html              # Página principal com todas as seções
├── css/
│   └── styles.css          # Estilos com CSS Variables, Flexbox, Grid e animações
├── js/
│   └── script.js           # Lógica: typing effect, GitHub API, modal, form, quote
├── assets/
│   ├── profile.jpeg        # Foto de perfil
│   ├── parallax-bg.jpg     # Imagem de fundo parallax
│   └── nike-icon.png       # Favicon e logo
├── .gitignore              # Ignora arquivos de sistema
├── LICENSE                 # Licença MIT
└── README.md               # Este arquivo
```

---

## 🚀 Como Usar

### Requisitos

- Navegador moderno com suporte a ES6+ e CSS Variables
- Conexão com internet (para APIs do GitHub e Quotable)

### Executar Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/Gukisz/newportifolio.git
   cd newportifolio
   ```

2. Abra o arquivo `index.html` no navegador:
   ```bash
   open index.html      # macOS
   xdg-open index.html  # Linux
   start index.html     # Windows
   ```

> Não é necessário servidor — o site é 100% estático.

### Personalizar

- **Foto de perfil**: substitua `assets/profile.jpeg`
- **Textos e bio**: edite diretamente em `index.html`
- **Usuário do GitHub**: altere `const username = "Gukisz"` em `js/script.js`
- **Formulário de contato**: atualize a URL do Formspree em `index.html`

### Deploy no GitHub Pages

1. Faça push para a branch `main`
2. Acesse **Settings > Pages** no repositório
3. Configure a source para `main` e root (`/`)
4. Pronto! O site estará em `https://gukisz.github.io/newportifolio/`

---

## 🛠 Tecnologias Utilizadas

- **HTML5** — semantic tags, formulários acessíveis, atributos ARIA
- **CSS3** — CSS Variables, Flexbox, CSS Grid, backdrop-filter, transitions, media queries
- **JavaScript ES6+** — DOM manipulation, Fetch API, localStorage, event listeners
- **AOS** — Animate On Scroll library (via CDN)
- **Font Awesome** — Ícones sociais e de habilidades (via CDN)
- **GitHub REST API** — Listagem dinâmica de repositórios
- **Quotable.io API** — Citações inspiradoras aleatórias
- **Formspree** — Envio de formulários sem backend

---

## 📄 Licença

Distribuído sob licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais informações.

---

<div align="center">
  <p>Desenvolvido por <a href="https://github.com/Gukisz">Gustavo Ribeiro</a></p>
</div>

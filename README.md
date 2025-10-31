# 🌐 Projeto Final — Aplicação Web Acessível

## 📝 Descrição
Este projeto foi desenvolvido como parte da entrega final da disciplina de Desenvolvimento Web.  
A aplicação tem como objetivo consolidar o aprendizado de **HTML5**, **CSS3** e **JavaScript Avançado**, com foco em **acessibilidade (WCAG 2.1)**, **boas práticas de versionamento GitFlow** e **otimização para produção**.

---

## 🚀 Funcionalidades Principais
✅ Navegação estilo **Single Page Application (SPA)** básica  
✅ Validação de formulários com mensagens de erro acessíveis  
✅ Suporte completo a **leitores de tela** e **navegação por teclado**  
✅ **Modo escuro** e **versão de alto contraste**  
✅ Estrutura **HTML semântica** conforme WCAG 2.1 nível AA  
✅ Código minificado e imagens otimizadas para produção  
✅ **Deploy automático** via GitHub Pages (workflow configurado)

---

## 🧩 Tecnologias Utilizadas
- **HTML5 Semântico**
- **CSS3 / Design System** com variáveis personalizadas
- **JavaScript Avançado (DOM, SPA, Validação)**
- **Git e GitHub (GitFlow, Commits Semânticos)**
- **GitHub Actions** para CI/CD (deploy automático)
- **Ferramentas de otimização:**  
  `html-minifier-terser`, `minify`, `terser`, `imagemin`

---

## ♿ Acessibilidade (WCAG 2.1 AA)
O projeto segue as recomendações da **WCAG 2.1 Nível AA**, garantindo acesso universal.

- Estrutura semântica (`header`, `main`, `section`, `footer`)
- Navegação por teclado (`Tab`, `Enter`, `Espaço`)
- Foco visível (`:focus-visible`)
- Contraste mínimo de 4.5:1
- Textos alternativos (`alt` e `aria-label`)
- `aria-live` para feedback dinâmico em formulários
- Suporte a modo **escuro** e **alto contraste**

---

## 🧱 Estrutura do Projeto
/
├── index.html
│── css/style.css
|── js/app.js
│── img/
├── README.md
├── package.json
└── .github/workflows/deploy.yml


## 🔧 Instalação e Execução Local

### 1️⃣ Clonar o repositório
```bash
git clone https://github.com/seu-usuario/nome-do-projeto.git
cd nome-do-projeto
```

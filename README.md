# 🧙‍♂️ Harry Potter Character Ratings

Este é um projeto fullstack desenvolvido em **Next.js com TypeScript**, que permite aos usuários **avaliar personagens do universo Harry Potter**. A aplicação oferece **cadastro e login**, e implementa um **CRUD completo** com integração externa via API pública.

---

## 🪄 Descrição do Projeto

O sistema foi pensado como uma plataforma para **registrar avaliações de personagens** do universo de Harry Potter. Cada personagem avaliado possui:

- Nome completo e alternativo
- Data de nascimento
- Casa de Hogwarts
- Intérprete (ator/atriz)
- Imagem (ou imagem padrão, se ausente)
- Nota de 0 a 5 (com estrelas)
- Comentário personalizado do usuário

Os dados principais são obtidos da [HP-API](https://hp-api.onrender.com/api/characters), garantindo informações atualizadas, enquanto as avaliações e comentários são armazenados localmente.

---

## 🧩 Tecnologias Utilizadas

- **Next.js** 14 com App Router
- **TypeScript**
- **CSS Puro** (sem Tailwind)
- **API externa (HP-API)**
- **Server Actions do Next.js**
- **Persistência com JSON local (mock de banco de dados)**

---

## 📌 Problema que o Projeto Tenta Resolver

Apesar do vasto conteúdo sobre Harry Potter, **não existe uma forma estruturada de registrar e comparar opiniões sobre os personagens da saga**, especialmente com uma interface amigável que una:

- Dados reais dos personagens (de forma automatizada)
- Avaliações subjetivas dos fãs
- Organização visual clara por nota

---

## 🤔 Por que Esse Problema É Importante?

O universo de Harry Potter tem **milhões de fãs no mundo todo**, cada um com suas preferências e interpretações. Ao oferecer uma ferramenta que:

- Consolida dados reais da obra
- Permite registrar avaliações personalizadas
- Organiza os personagens por relevância (nota)

... o projeto promove **engajamento, memória afetiva e troca de opiniões** de forma técnica e bem estruturada.

Além disso, ele demonstra na prática a construção de um **CRUD completo**, com autenticação, integração externa e organização de dados — cobrindo habilidades essenciais em desenvolvimento web.

---

## ✅ Funcionalidades implementadas

- [x] Login e Cadastro de usuário
- [x] Cadastro de avaliação por personagem (nota + comentário)
- [x] Autocomplete com nomes da API
- [x] Imagens padrão para personagens sem imagem
- [x] Ordenação por nota (do maior para o menor)
- [x] Edição e exclusão de avaliações
- [x] Design responsivo e acessível

---

## 📁 Estrutura de Pastas

```
src/
├── app/
│ ├── (auth)/ # Páginas de autenticação
│ │ ├── create/page.tsx # Página de cadastro de usuário
│ │ ├── login/page.tsx # Página de login de usuário
│ │ └── layout.tsx # Layout das páginas de login/cadastro
│ ├── dashboard/ # Áreas protegidas para usuário logado
│ │ ├── create/page.tsx # Formulário para avaliar personagem
│ │ ├── edit/[id]/page.tsx # Edição de avaliação existente
│ │ └── page.tsx # Página com cards ordenados por nota
│ ├── db/ # Banco de dados local simulado
│ │ ├── character-db.json
│ │ └── usuarios-db.json
│ ├── libs/ # Funções auxiliares
│ │ ├── add-char.ts
│ │ ├── conexao-bd.ts
│ │ ├── credentials.ts
│ │ ├── hpapi.ts
│ │ └── session.ts
│ ├── styles/ # Estilos (CSS puro)
│ │ ├── autocomplete.css
│ │ ├── characters.css
│ │ ├── create-character.css
│ │ ├── dashboard.css
│ │ ├── footer.css
│ │ ├── header.css
│ │ └── login.css
│ ├── ui/ # Componentes de interface
│ │ ├── autocompleteInput.tsx
│ │ ├── characters.tsx
│ │ ├── footer.tsx
│ │ └── header.tsx
│ ├── globals.css
│ ├── layout.tsx
│ ├── page.css
│ └── page.tsx
├── middleware.ts
├── package.json
├── package-lock.json
├── next.config.ts
├── next-env.d.ts
└── tsconfig.json
```

## Atividades realizadas:
João Guilherme Alvarenga: Tela de Login e Cadastro
Pedro Henrique Pereira Campos: Dashboard, edit e delete
João Victor Queiroz: Create, Implementação da API, Funcionalidade AutoComplete e CSS

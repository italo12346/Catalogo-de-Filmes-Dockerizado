# 🎬 Catálogo de Filmes Profissional

Um sistema completo de gestão de filmes desenvolvido com uma arquitetura moderna, robusta e escalável. O projeto utiliza **Clean Architecture** no backend e as tecnologias mais recentes do ecossistema React no frontend.

## 🚀 Tecnologias Utilizadas

### Frontend

- **Next.js 16 (App Router)**: Framework React para produção.
- **React 19**: Versão mais recente com suporte a Server Components.
- **Tailwind CSS 4**: Estilização moderna com suporte nativo a variáveis CSS.
- **Next Themes**: Gerenciamento de tema claro/escuro sem flicker.
- **Glassmorphism UI**: Interface futurista com efeitos de transparência e desfoque.

### Backend

- **Node.js & TypeScript**: Ambiente de execução e tipagem forte.
- **Prisma ORM v6**: Manipulação de banco de dados com segurança de tipos.
- **Clean Architecture**: Separação clara de responsabilidades (Domain, Application, Infrastructure, Interface).
- **SOLID Principles**: Código limpo, testável e fácil de manter.
- **Express**: Servidor HTTP para a API REST.

### Infraestrutura & DevOps

- **PostgreSQL**: Banco de dados relacional.
- **Docker & Docker Compose**: Containerização completa do ambiente.
- **Kubernetes (k8s)**: Manifestos prontos para orquestração em larga escala.
- **Docker Hub**: Imagens prontas para deploy imediato.

---

## 🏗️ Arquitetura do Projeto (Clean Architecture)

O backend segue o padrão de arquitetura limpa, garantindo que a lógica de negócio seja independente de ferramentas externas:

- **Domain**: Entidades e contratos (Interfaces) dos repositórios.
- **Application**: Casos de uso (Use Cases) que orquestram a lógica do sistema.
- **Infrastructure**: Implementações técnicas (Prisma, Banco de Dados).
- **Interface**: Controllers e rotas que expõem a funcionalidade via HTTP.

---

## 🎨 Paleta de Cores & Design

O projeto utiliza uma estética **Cyberpunk/Futurista**:

- 🌌 **Fundo Escuro**: `#37313c`
- 💖 **Destaque Primário**: `#f63090` (Rosa Neon)
- 💎 **Destaque Secundário**: `#4cc9f4` (Azul Neon)
- ❄️ **Texto/Fundo Claro**: `#e1f0f0`

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js v22+
- Docker & Docker Compose
- (Opcional) Kubernetes / Minikube

### Execução Local (Desenvolvimento)

1. **Configurar o Backend:**

   ```bash
   cd backend
   npm install
   npx prisma generate
   npm run dev
   ```

2. **Configurar o Frontend:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

### Execução via Docker Compose

Na raiz do projeto, execute:

```bash
docker-compose up --build
```

Isso iniciará o Banco de Dados, o Backend (porta 3001) e o Frontend (porta 3000) automaticamente.

---

## ☸️ Kubernetes (Deploy Profissional)

Os manifestos na pasta `k8s/` permitem o deploy em clusters Kubernetes:

1. **Aplicar os Segredos:**
   ```bash
   kubectl apply -f k8s/secrets.yaml
   ```
2. **Subir os Serviços:**
   ```bash
   kubectl apply -f k8s/
   ```

Imagens oficiais utilizadas:

- `italo12346/movie-backend:v1.0`
- `italo12346/movie-frontend:v1.0`

---

## 📄 Funcionalidades (CRUD)

- [x] Listagem de filmes em tempo real.
- [x] Cadastro de novos filmes via Modal.
- [x] Edição de filmes existentes com preenchimento automático.
- [x] Exclusão de filmes com confirmação.
- [x] Alternância entre Modo Claro e Modo Escuro (Dark Mode).
- [x] Validação de dados e persistência no PostgreSQL.

---

Desenvolvido com foco em **Performance**, **Escalabilidade** e **Experiência do Usuário**. 🍿

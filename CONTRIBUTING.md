# Contributing to Bisolhador

Obrigado por seu interesse em contribuir com o **Bisolhador**! Esta é uma ferramenta de apoio ao ensino de Engenharia de Software. Siga os passos abaixo para contribuir de forma eficaz.

## Pré-requisitos

- Node.js (v18+)
- NPM

## Como Rodar o Projeto Localmente

1. **Clone o repositório**:
   ```
   git clone https://github.com/assertlab/bisolhador.git
   cd bisolhador
   ```

2. **Instale as dependências**:
   ```
   npm install
   ```

3. **Configure o ambiente**:
   - Crie um arquivo `.env` na raiz do projeto baseado no `.env.example`
   - Preencha as variáveis necessárias:
     - `VITE_SUPABASE_URL`: URL do seu projeto Supabase
     - `VITE_SUPABASE_ANON_KEY`: Chave anônima do Supabase
     - `VITE_GA_ID`: ID do Google Analytics 4 (opcional)

4. **Execute o projeto**:
   ```
   npm run dev
   ```

5. **Ou faça o build para produção**:
   ```
   npm run build
   ```

A aplicação estará disponível em `http://localhost:5173`

## Como Abrir um Pull Request (PR)

1. **Fork o repositório**: Clique em "Fork" no GitHub para criar uma cópia em sua conta.

2. **Clone seu fork**:
   ```
   git clone https://github.com/seu-usuario/bisolhador.git
   cd bisolhador
   ```

3. **Crie uma branch para sua feature/bugfix**:
   ```
   git checkout -b minha-feature
   ```

4. **Faça suas alterações**:
   - Teste localmente com `npm run dev`.
   - Siga o estilo de código do projeto.

5. **Commite suas mudanças**:
   ```
   git add .
   git commit -m "Descrição clara da mudança"
   ```

6. **Push para sua branch**:
   ```
   git push origin minha-feature
   ```

7. **Abra um Pull Request**:
   - Vá para seu fork no GitHub e clique em "Compare & pull request".
   - Descreva suas mudanças e escolha o branch principal do repositório original.

Antes de enviar, certifique-se de que o código funciona corretamente e segue os padrões do projeto.

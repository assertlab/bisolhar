# Bisolhador Design System (v2.1)

## 1. Filosofia

Utilizamos **React** com **Tailwind CSS** e **Vite** como bundler. Os componentes seguem o padrão de **Functional Components** com **Hooks**, utilizando a biblioteca **react-chartjs-2** para gráficos e **html2pdf.js** para exportação.

## 2. Paleta de Cores (Tailwind Config)

As cores estão configuradas no `tailwind.config.js`:

  * **Primary (Shark):** `#0f172a` (Backgrounds de Header, Sidebars).
  * **Action (Ocean):** `#0ea5e9` (Botões principais, Links, Destaques).
  * **Alert (Coral):** `#f97316` (Alertas de Crunch, Bus Factor).
  * **Background:** `bg-gray-50` (Fundo da página).
  * **Surface:** `bg-white` (Fundo de Cards).

## 3. Componentes React

### Cards (Container)

Todos os cards seguem o padrão:
- **Estilo Base:** `bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow`
- **Z-Index:** `hover:z-50` para suportar tooltips sem conflitos
- **Hover:** `relative overflow-visible hover:z-50`
- **PDF Export:** `break-inside-avoid` para evitar quebras indesejadas

### Botões

  - **Primary:** `text-white bg-ocean hover:bg-sky-600 focus:ring-4 focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5`
  - **Secondary/Light:** `text-gray-900 bg-white border border-gray-300 hover:bg-gray-100`
  - **Destructive:** `bg-red-50 border border-red-200 text-red-700` (para alertas)

### Gráficos (Charts)

  - **Biblioteca:** `react-chartjs-2` (Chart.js wrapper para React)
  - **Configuração:** `responsive: true`, `maintainAspectRatio: false`
  - **Cores:** Ocean (#0ea5e9) para dados principais
  - **Smart Trim:** Para projetos jovens, mostrar apenas período relevante

### Tooltips

  - **Componente:** `<Tooltip />` customizado
  - **Estilo:** `absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-black text-white text-xs p-2 rounded w-64 z-50`
  - **Conteúdo:** Critérios explícitos de classificação para cada métrica
  - **Trigger:** `group-hover:block` com `cursor-help`

## 4. Tipografia

  - Fonte Padrão: System UI / Sans-serif do Tailwind.
  - **Títulos de Cards:** `text-lg font-semibold text-gray-900`
  - **Valores:** `text-2xl font-bold` para métricas principais
  - **Labels:** `text-sm text-gray-600` para descrições

## 5. Layout e Responsividade

### Grid System
- **Métricas:** `grid-cols-1 sm:grid-cols-2 lg:grid-cols-5` (5 colunas no desktop)
- **Charts:** `grid-cols-1 lg:grid-cols-2` (2 colunas lado a lado)
- **Cards:** Sempre `gap-4` ou `gap-6` entre elementos

### Breakpoints
- `sm:` (640px) - Tablets
- `md:` (768px) - Small desktops
- `lg:` (1024px) - Large desktops

## 6. Interações e Estados

### Estados de Loading
- Barra de busca mostra spinner durante requisições
- Botão "Buscar" desabilitado durante carregamento

### Estados de Erro
- Alerta vermelho suave no topo da página
- Botão X para dispensar erro
- Mantém interface funcional para tentar novamente

### Hover Effects
- Cards: `hover:shadow-md transition-shadow`
- Tooltips: Aparecem no hover com delay suave
- Botões: Mudança de cor com `hover:` states

## 7. Convenções de Código

### React Patterns
- **Functional Components** com **Hooks**
- **PascalCase** para nomes de componentes
- **camelCase** para props e variáveis
- **Arrow functions** para event handlers

### Estrutura de Arquivos
```
src/
├── components/     # UI Components
├── hooks/         # React Hooks (lógica de estado)
├── services/      # API calls
├── utils/         # Helpers e utilitários
└── main.jsx       # Ponto de entrada
```

### CSS Classes
- **Tailwind utility-first** approach
- **Custom config** no `tailwind.config.js` para cores do tema
- **No CSS custom** - tudo via Tailwind classes

### Naming Conventions
- **Componentes:** `PascalCase` (ex: `StatCard`, `Header`)
- **Hooks:** `camelCase` com prefixo `use` (ex: `useRepository`)
- **Services:** `camelCase` (ex: `githubService`)
- **Utils:** `camelCase` (ex: `pdfExporter`, `analyzers`)

## 8. Performance

### Otimizações
- **Vite HMR** para desenvolvimento rápido
- **React.lazy()** não utilizado (app pequeno)
- **Memoization** não necessária atualmente
- **Bundle splitting** automático do Vite

### Build
- **ESLint** integrado para qualidade de código
- **Minificação** automática
- **Source maps** em desenvolvimento
- **GitHub Pages** ready

---

Este design system garante consistência visual e de código, facilitando a manutenção e expansão do projeto.

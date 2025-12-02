# 🗺️ Roadmap - Bisolhador Dashboard

## ✅ Concluído

### v2.1.0 - Migração React Completa (Dezembro 2025)
- [x] **Migração para React + Vite**: Substituição completa da arquitetura vanilla JS por React 18 com Vite como bundler
- [x] **Componentização**: Reescrita de todos os módulos como componentes React funcionais com hooks
- [x] **Design System v2**: Padronização completa com Tailwind CSS e componentes React
- [x] **Export PDF Funcional**: Implementação completa com html2pdf.js
- [x] **Identidade Visual**: Logo ASSERT Lab e favicon
- [x] **Correção de Queries API**: Padronização de todas as chamadas GitHub Search API
- [x] **Smart Trim nos Gráficos**: Lógica inteligente para mostrar apenas períodos relevantes em projetos jovens
- [x] **UX Aprimorada**: Alertas de erro inline sem quebrar fluxo de navegação

### v2.0.0 - Lançamento React (Novembro 2025)
- [x] **Arquitetura Moderna**: Transição completa para React + Vite
- [x] **Estrutura Modular**: Separação clara entre components, hooks, services e utils
- [x] **Performance Otimizada**: HMR, tree-shaking e build otimizado com Vite
- [x] **Developer Experience**: ESLint integrado, source maps, hot reload

## 🚧 Em Desenvolvimento

### v2.2.0 - Performance & UX (Planejado: Janeiro 2026)
- [ ] **TanStack Query (React Query)**: Migração do useEffect para useQuery visando cache, retentativas automáticas e eliminação de 'Waterfalls'
- [ ] **Skeleton Screens**: Substituição dos spinners de loading por esqueletos pulsantes dos cards para melhorar a percepção de velocidade (LCP)
- [ ] **Code Splitting (Lazy Loading)**: Carregamento sob demanda dos componentes pesados (Chart.js) para reduzir o bundle inicial

### v2.3.0 - Recursos Avançados (Planejado: Fevereiro 2026)
- [ ] **Modo Escuro**: Toggle dark/light theme
- [ ] **Comparação de Repositórios**: Side-by-side analysis
- [ ] **Dashboards Salvos**: Persistir análises favoritas
- [ ] **Export Formats**: JSON, CSV além de PDF

### v2.4.0 - Analytics Avançados (Planejado: Março 2026)
- [ ] **Machine Learning**: Detecção automática de padrões de código
- [ ] **Predições**: Estimativas de maintenance burden
- [ ] **Relatórios Customizáveis**: Templates editáveis
- [ ] **API REST**: Endpoints para integração com outras ferramentas

## 🔮 Futuro Longo Prazo

### v3.0.0 - Plataforma (Planejado: 2026)
- [ ] **Multi-plataforma**: PWA, mobile app
- [ ] **Colaboração**: Workspaces compartilhados
- [ ] **Integrações**: GitLab, Bitbucket, Azure DevOps
- [ ] **Analytics Avançados**: BI com PowerBI/Tableau integration

### v4.0.0 - IA e Automação (Planejado: 2027)
- [ ] **IA Generativa**: Recomendações automáticas de melhorias
- [ ] **Auto-fix**: Sugestões de correção para issues comuns
- [ ] **Predictive Analytics**: Previsão de riscos de projeto
- [ ] **Automated Reporting**: Relatórios semanais automáticos

## 📊 Métricas de Sucesso

### KPIs Técnicos
- **Performance**: Lighthouse score > 95
- **Bundle Size**: < 500KB gzipped
- **Time to Interactive**: < 2s
- **Test Coverage**: > 80%

### KPIs de Produto
- **Uptime**: 99.9% disponibilidade
- **User Satisfaction**: > 4.5/5 estrelas
- **Educational Impact**: 100+ instituições usando
- **Community Growth**: 1000+ repositórios analisados mensalmente

## 🤝 Como Contribuir

1. **Issues**: Reporte bugs ou sugira features
2. **PRs**: Implemente melhorias seguindo o design system
3. **Discussions**: Participe de debates sobre direção do projeto
4. **Documentation**: Ajude a melhorar docs e tutoriais

## 📅 Cronograma Sugerido

```
Dez 2025: v2.1.0 ✅
Jan 2026: v2.2.0 (Performance & UX)
Fev 2026: v2.3.0 (Dark Mode + Comparação)
Mar 2026: v2.4.0 (ML Features)
Q2 2026: v3.0.0 (Plataforma)
Q4 2026: v4.0.0 (IA)
```

## 🎯 Prioridades por Impacto

### Alto Impacto
- Testes automatizados
- Performance optimizations
- UX improvements

### Médio Impacto
- Dark mode
- Mobile responsiveness
- Advanced analytics

### Baixo Impacto
- Theming customization
- Export format variety
- Social features

---

**Mantido por ASSERT Lab 🦈 | [GitHub Issues](https://github.com/assertlab/bisolhador/issues)**

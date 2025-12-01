import { useState } from 'react';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { RepoInfoCard } from './components/RepoInfoCard';
import { StatCard } from './components/StatCard';
import { TechStackChart } from './components/charts/TechStackChart';
import { CommitActivityChart } from './components/charts/CommitActivityChart';

function App() {
  const [loading, setLoading] = useState(false);
  const [repoData, setRepoData] = useState(null);

const handleSearch = (repositoryName) => {
    console.log(`Bisolhando: ${repositoryName}`);
    setLoading(true);
    setRepoData(null);

    // SIMULAÇÃO DE API (Mock Data)
    setTimeout(() => {
      setLoading(false);
      
      setRepoData({
        fullName: repositoryName,
        url: `https://github.com/${repositoryName}`,
        description: "Um dashboard analítico para 'bisolhar' indicadores de análise estática e governança para repositórios educacionais e open-source no GitHub.",
        ageText: "2 anos e 3 meses",
        createdAt: "15/03/2023",
        stats: {
          branches: 12,
          prs: 45,
          merges: 42,
          prsPerBranch: 3.7,
          releases: 5
        },
        metrics: {
          stars: 127,
          forks: 29,
          openIssues: 4,
          closedIssues: 120,
          resolutionRate: "96% resolvidas",
          leadTime: "2 dias",
          divergence: "3.5 (Saudável)"
        },
        // --- AQUI ESTÁ O QUE FALTAVA ---
        charts: {
          techStack: [
            { language: 'TypeScript', percentage: 65, color: '#3178c6' },
            { language: 'JavaScript', percentage: 25, color: '#f1e05a' },
            { language: 'CSS', percentage: 10, color: '#563d7c' }
          ],
          activity: {
            labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Hoje'],
            values: [12, 19, 3, 5, 2, 30]
          }
        }
        // -------------------------------
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      {/* É AQUI! A tag <main> é o container principal da página */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="text-3xl font-bold text-shark tracking-tight text-center">
            Analise repositórios como um Tech Lead
          </h2>
          
          <div className="w-full pt-4">
            <SearchBar onSearch={handleSearch} loading={loading} />
          </div>
        </div>

        {/* Lógica de Renderização: Se tem dados, mostra o Dashboard completo */}
        {repoData ? (
          <div className="space-y-6 animate-fade-in-up">
            
            {/* 1. Card Principal */}
            <RepoInfoCard data={repoData} />
            
            {/* 2. Grid de Métricas de Volume */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatCard title="Stars" value={repoData.metrics.stars} />
              <StatCard title="Forks" value={repoData.metrics.forks} />
              <StatCard title="Open Issues" value={repoData.metrics.openIssues} />
              <StatCard 
                title="Closed Issues" 
                value={repoData.metrics.closedIssues} 
                subValue={repoData.metrics.resolutionRate} 
              />
            </div>

            {/* 3. Grid de Dinâmica de Revisão */}
            <h3 className="text-lg font-semibold text-shark pt-4">Dinâmica de Revisão</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatCard 
                title="Lead Time" 
                value={repoData.metrics.leadTime} 
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>}
              />
              <StatCard 
                title="Divergência" 
                value={repoData.metrics.divergence}
                icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path></svg>}
              />
            </div>

            {/* 4. Área de Gráficos */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <CommitActivityChart data={repoData.charts.activity} />
              <TechStackChart data={repoData.charts.techStack} />
            </div>

          </div>
        ) : (
          /* Placeholder vazio quando não pesquisou nada */
          !loading && (
            <div className="border-2 border-dashed border-gray-200 rounded-xl h-64 flex items-center justify-center text-gray-400">
              Os gráficos aparecerão aqui...
            </div>
          )
        )}

      </main>

      <footer className="bg-white border-t border-gray-200 py-6 mt-auto">
        <div className="text-center text-sm text-gray-500">
          <p>© 2025 Vinicius Cardoso Garcia. Licenciado sob MIT.</p>
          <p className="mt-1 font-medium text-shark">
            Powered by ASSERT Lab. Orgulhosamente feito em Recife 🦈
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
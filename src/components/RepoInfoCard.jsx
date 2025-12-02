import React from 'react';
import { formatters } from '../utils/formatters.js';

export function RepoInfoCard({ data }) {
  if (!data) return null;

  console.log('RepoInfoCard - createdAt:', data.createdAt);
  console.log('RepoInfoCard - createdAtFormatted:', data.createdAtFormatted);

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 animate-fade-in relative z-10">

      {/* Cabeçalho do Card: Nome e Descrição */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-ocean mb-2 hover:underline">
          <a href={data.url} target="_blank" rel="noopener noreferrer">
            {data.fullName}
          </a>
        </h2>
        <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
          {data.description || "Sem descrição disponível."}
        </p>
      </div>

      {/* Grid de Informações: Idade vs Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 dark:border-slate-700 pt-6">

        {/* Coluna 1: Idade */}
        <div>
          <h3 className="text-sm font-semibold text-shark dark:text-white uppercase tracking-wider mb-3">
            Idade do Projeto
          </h3>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            {data.ageText}
          </p>
          <p className="text-sm text-gray-500 dark:text-slate-400 mt-1">
            (Desde {data.createdAtFormatted})
          </p>
        </div>

        {/* Coluna 2: Funil de Produção */}
        <div>
          <h3 className="text-sm font-semibold text-shark dark:text-white uppercase tracking-wider mb-3">
            Estatísticas Extras
          </h3>
          <ul className="space-y-2">
            <li className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-slate-400">Total de Branches:</span>
              <span className="font-medium text-gray-900 dark:text-white">{formatters.formatNumber(data.stats.branches)}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-slate-400">Total de PRs:</span>
              <span className="font-medium text-gray-900 dark:text-white">{formatters.formatNumber(data.stats.prs)}</span>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-gray-600 dark:text-slate-400">Total de Merges:</span>
              <span className="font-medium text-gray-900 dark:text-white">{formatters.formatNumber(data.stats.merges)}</span>
            </li>
            <li className="flex justify-between text-sm border-t border-gray-100 dark:border-slate-700 pt-1 mt-1">
              <span className="text-gray-600 dark:text-slate-400">PRs por Branch:</span>
              <span className="font-medium text-gray-900 dark:text-white">{data.stats.prsPerBranch}</span>
            </li>
            <li className="flex justify-between text-sm font-semibold text-ocean dark:text-blue-400">
              <span>Total de Releases:</span>
              <span>{data.stats.releases}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

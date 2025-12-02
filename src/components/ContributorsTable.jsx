import React from 'react';
import { Tooltip } from './Tooltip.jsx';

export function ContributorsTable({ contributors, busFactor }) {
  // Determinar cor do alerta baseado no level
  let alertColor = 'bg-gray-100 dark:bg-slate-700 border-gray-200 dark:border-slate-600';
  let textColor = 'text-gray-800 dark:text-slate-200';
  if (busFactor.level === 'high') {
    alertColor = 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-700';
    textColor = 'text-red-800 dark:text-red-200';
  } else if (busFactor.level === 'medium') {
    alertColor = 'bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-700';
    textColor = 'text-yellow-800 dark:text-yellow-200';
  } else {
    alertColor = 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700';
    textColor = 'text-green-800 dark:text-green-200';
  }

  return (
    <div className="bg-white dark:bg-slate-800 border border-gray-200 dark:border-slate-700 rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow relative overflow-hidden">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center gap-2">
          Contribuições (Bus Factor)
          <Tooltip text="Avalia o risco de dependência de poucos contribuidores. Bus Factor alto indica vulnerabilidade.">
            <svg className="w-4 h-4 text-gray-300 dark:text-slate-500 hover:text-gray-500 dark:hover:text-slate-400 cursor-help" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </Tooltip>
        </h3>
      </div>

      {/* Alerta do Bus Factor */}
      <div className={`mb-6 p-4 rounded-md border ${alertColor}`}>
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className={`h-5 w-5 ${textColor}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h3 className={`text-sm font-medium ${textColor}`}>
              {busFactor.title}
            </h3>
            <div className={`mt-2 text-sm ${textColor}`}>
              <p>{busFactor.message}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabela */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
          <thead className="bg-gray-50 dark:bg-slate-700">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Contribuidor
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                Commits
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-slate-400 uppercase tracking-wider">
                % do Trabalho
              </th>
            </tr>
          </thead>
          <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-200 dark:divide-slate-700">
            {contributors.map((contributor, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img className="h-10 w-10 rounded-full" src={contributor.avatar_url} alt="" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900 dark:text-white">
                        {contributor.login}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900 dark:text-white">{contributor.contributions}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="text-sm text-gray-900 dark:text-white mr-3">{contributor.percentage}%</span>
                    <div className="w-16 bg-gray-200 dark:bg-slate-600 rounded-full h-2">
                      <div
                        className="bg-ocean h-2 rounded-full"
                        style={{ width: `${contributor.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

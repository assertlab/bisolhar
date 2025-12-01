import React from 'react';

export function StatCard({ title, value, subValue, icon, type = 'default' }) {
  // Cores dinâmicas baseadas no tipo de alerta (para o futuro)
  const valueColor = type === 'alert' ? 'text-coral' : 'text-gray-900';

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
      
      {/* Cabeçalho do Card */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider flex items-center gap-2">
          {title}
          {/* Placeholder do Tooltip (Implementaremos o componente completo depois) */}
          <span className="text-gray-300 cursor-help" title="Mais informações em breve...">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </span>
        </h3>
        
        {/* Ícone opcional no canto */}
        {icon && (
          <div className="text-ocean bg-ocean/10 p-2 rounded-lg">
            {icon}
          </div>
        )}
      </div>

      {/* Valor Principal */}
      <div className={`text-3xl font-bold ${valueColor} tracking-tight`}>
        {value}
      </div>

      {/* Valor Secundário (Ex: Taxa de Resolução) */}
      {subValue && (
        <div className="mt-2 text-xs font-medium text-gray-500 bg-gray-100 inline-block px-2 py-1 rounded self-start">
          {subValue}
        </div>
      )}
    </div>
  );
}
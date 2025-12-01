import React from 'react';
import { Doughnut } from 'react-chartjs-2';

export function TechStackChart({ data }) {
  // Configuração dos dados para o Chart.js
  const chartData = {
    labels: data.map(item => item.language),
    datasets: [
      {
        data: data.map(item => item.percentage),
        backgroundColor: data.map(item => item.color),
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right', // Legenda ao lado fica mais elegante
        labels: { usePointStyle: true, boxWidth: 8 }
      }
    },
    cutout: '60%', // Deixa o buraco no meio (Rosca)
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col h-80 hover:shadow-md transition-shadow relative overflow-visible hover:z-50">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
        Stack Tecnológica
        <span className="text-gray-300 cursor-help" title="Linguagens utilizadas no repositório">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </span>
      </h3>
      <div className="flex-grow relative">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}
import React from 'react';
import { Line } from 'react-chartjs-2';

export function CommitActivityChart({ data }) {
  const chartData = {
    labels: data.labels, // Ex: ['01/Nov', '08/Nov'...]
    datasets: [
      {
        label: 'Commits',
        data: data.values,
        borderColor: '#0ea5e9', // Cor Ocean
        backgroundColor: 'rgba(14, 165, 233, 0.1)', // Ocean transparente
        fill: true,
        tension: 0.4, // Curva suave
        pointRadius: 2,
        pointHoverRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Esconde legenda "Commits" pois é óbvio
      tooltip: { mode: 'index', intersect: false }
    },
    scales: {
      y: { beginAtZero: true, grid: { borderDash: [2, 4] } },
      x: { grid: { display: false } }
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 flex flex-col h-80 hover:shadow-md transition-shadow relative overflow-visible hover:z-50">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
        Fluxo de Trabalho (Últimas Semanas)
        <span className="text-gray-300 cursor-help" title="Frequência de commits ao longo do tempo">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        </span>
      </h3>
      <div className="flex-grow relative">
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
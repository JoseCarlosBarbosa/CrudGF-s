import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function GerarRelatorio() {
  const location = useLocation();
  const { dataInicio, dataFim, valorTotalGeral } = location.state;
  const navigate = useNavigate(); // Adicione esta linha para obter a função de navegação

  return (
    <div>
      <h1>Relatório Gerado</h1>
      <p>Data de Início: {dataInicio}</p>
      <p>Data de Fim: {dataFim}</p>
      <p>Valor Total Geral: {valorTotalGeral}</p>
      <button onClick={() => navigate('/')} /* Adicione este botão para voltar para a página inicial */>
        Voltar para a página inicial
      </button>
    </div>
  );
}

export default GerarRelatorio;

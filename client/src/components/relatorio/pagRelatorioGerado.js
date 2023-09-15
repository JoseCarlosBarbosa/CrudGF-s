import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function PagRelatorioGerado() {
  const location = useLocation();
  const { FormatdataInicio, valorTotal } = location.state;
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (valorTotal !== null && valorTotal !== undefined) {
      setLoading(false);
    }
  }, [valorTotal]);

  return (
    <div>
      <h1>Relatório Gerado</h1>
      <p>Data de Início: {FormatdataInicio}</p>
      <p>
        Valor total $ Entrou: {loading ? 'Carregando...' : (valorTotal || 0)}
      </p>
      <button onClick={() => navigate('/')}>
        Voltar para a página inicial
      </button>
    </div>
  );
}

export default PagRelatorioGerado;

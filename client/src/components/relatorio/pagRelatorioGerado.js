import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';

function GerarRelatorio() {

  const location = useLocation();
  const { dataInicio, dataFim } = location.state;
  const navigate = useNavigate();

  const [valorTotal, setValorTotal] = useState([]);

  function formatarDatauser(data) {
    const partes = data.split('-');
    if (partes.length === 3) {
      const [ano, mes, dia] = partes;
      return `${dia}/${mes}/${ano}`;
    }
    return data;
  }

  function formatarDataBD(data) {
    const partes = data.split('/');
    if (partes.length === 3) {
      const [ano, mes, dia] = partes;
      return `${ano}-${mes}-${dia}`;
    }
    return data;
  }

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/getValorTotalGeral?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotal = response.data[0].valorTotalGeral;

        setValorTotal(valorTotal);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotal]);

  return (
    <div>

      <p>{dataInicio}</p>
      <h1>Relatório Gerado</h1>
      <p>Data de Início: {formatarDatauser(dataInicio)}</p>
      <p>Data de Fim: {formatarDatauser(dataFim)}</p>
      <p>Valor total $ Entrou: {valorTotal}</p>
      <button onClick={() => navigate('/')}>
        Voltar para a página inicial
      </button>

    </div>

  );
}

export default GerarRelatorio;
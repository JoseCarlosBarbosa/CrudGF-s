import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Rdatas() {
  const navigate = useNavigate();
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');
  
  const VoltarButton = () => {
    navigate('/');
  };

  const HandleClickGerarRelatorio = () => {
    // Formatar as datas antes de enviá-las para a página de relatório
    const dataInicioFormatada = formatarData(dataInicio);
    const dataFimFormatada = formatarData(dataFim);

    navigate('/relatorio', {
      state: {
        dataInicio: dataInicioFormatada,
        dataFim: dataFimFormatada,
      },
    });
  };

  function formatarData(data) {
    const partes = data.split('-');
    if (partes.length === 3) {
      const [ano, mes, dia] = partes;
      return `${dia}/${mes}/${ano}`;
    }
    return data;
  }

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">GF'S</h1>
        <h2 className="sub-title"> Relatório </h2>
        <button className="voltar--P1" onClick={VoltarButton}>
          Voltar
        </button>
        <h1> Data Início</h1>
        <input
          type="date"
          placeholder="Data Inicio"
          className="register-input"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
        />
        <p>Data Inicio formatada: {dataInicio}</p>
        <h1> Data Fim</h1>
        <input
          type="date"
          placeholder="Data Final"
          className="register-input"
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
        />
        <p>Data Fim formatada: {dataFim}</p>
        <button className="register-button" onClick={HandleClickGerarRelatorio}>
          Gerar Relatório
        </button>
      </div>
    </div>
  );
}

export default Rdatas;

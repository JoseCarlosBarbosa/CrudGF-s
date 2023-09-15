import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Rdatas() {
  const navigate = useNavigate();
  const dataInicioRef = React.createRef();
  const dataFimRef = React.createRef();

  const VoltarButton = () => {
    navigate('/');
  };

  const HandleClickGerarRelatorio = () => {
    const dataInicio = dataInicioRef.current.value;
    const dataFim = dataFimRef.current.value;
    navigate('/relatorio', {
      state: {
        dataInicio,
        dataFim
      },
    });
  };

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
          ref={dataInicioRef}
        />
        <h1> Data Fim</h1>
        <input
          type="date"
          placeholder="Data Final"
          className="register-input"
          ref={dataFimRef}
        />
        <button className="register-button" onClick={HandleClickGerarRelatorio}>
          Gerar Relatório
        </button>
      </div>
    </div>
  );
}

export default Rdatas;

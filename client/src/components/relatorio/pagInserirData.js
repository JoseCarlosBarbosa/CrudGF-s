import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function Rdatas() {
  const navigate = useNavigate();
  const [dataInicio, setDataInicio] = useState('');
  const [dataFim, setDataFim] = useState('');

  const VoltarButton = () => {
    navigate('/');
  };

  const HandleClickGerarRelatorio = () => {
    Axios.get(`http://localhost:3001/getValorTotalGeral?dataInicio=${dataInicio}&dataFim=${dataFim}`)
      .then((response) => {
        const valorTotalGeral = response.data.valorTotalGeral;
        navigate('/relatorio', {
          state: {
            dataInicio,
            dataFim,
            valorTotalGeral,
          },
        });
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
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
        <h1> Data Inicio</h1>
        <input
          type='date'
          placeholder='Data Inicio'
          className='register-input'
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
        />
        <h1> Data Fim</h1>
        <input
          type='date'
          placeholder='Data Final'
          className='register-input'
          value={dataFim}
          onChange={(e) => setDataFim(e.target.value)}
        />
        <button className="register-button" onClick={HandleClickGerarRelatorio}>
          Gerar Relatório
        </button>
      </div>
    </div>
  );
}

export default Rdatas;

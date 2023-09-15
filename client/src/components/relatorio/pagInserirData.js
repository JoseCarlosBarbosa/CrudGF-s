import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

function PagInserirData() {
  const navigate = useNavigate();
  const [dataInicio, setDataInicio] = useState('');
  const [error, setError] = useState(null);

  const VoltarButton = () => {
    navigate('/');
  };

  function formatarDataParaISO8601(data) {
    const ano = data.getUTCFullYear();
    const mes = String(data.getUTCMonth() + 1).padStart(2, '0');
    const dia = String(data.getUTCDate()).padStart(2, '0');
    const horas = String(data.getUTCHours()).padStart(2, '0');
    const minutos = String(data.getUTCMinutes()).padStart(2, '0');
    const segundos = String(data.getUTCSeconds()).padStart(2, '0');
    
    const dataFormatada = `${ano}-${mes}-${dia}T${horas}:${minutos}:${segundos}Z`;
    
    return dataFormatada;
  }
  
  const HandleClickGerarRelatorio = () => {
    setError(null); // Limpa erros anteriores
  
    // Verifique se dataInicio é uma string válida antes de tentar criar um objeto Date
    if (typeof dataInicio === 'string' && dataInicio.trim() !== '') {
      const parsedDate = new Date(dataInicio);
  
      if (!isNaN(parsedDate)) { // Verifique se o objeto Date é válido
        const FormatdataInicio = formatarDataParaISO8601(parsedDate);
  
        Axios.get(`http://localhost:3001/getValorTotalGeral?dataInicio=${FormatdataInicio}`)
          .then((response) => {
            const valorTotal = response.data.valorTotalGeral;
            navigate('/relatorio', {
              state: {
                FormatdataInicio,
                valorTotal,
              },
            });
          })
          .catch((error) => {
            console.error('Erro ao gerar relatório:', error);
            setError('Erro ao gerar o relatório. Por favor, tente novamente mais tarde.');
          });
      } else {
        setError('Data de início inválida. Por favor, insira uma data válida.');
      }
    } else {
      setError('Data de início inválida. Por favor, insira uma data válida.');
    }
  };
  

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">GF'S</h1>
        <h2 className="sub-title"> Relatório </h2>
        <p>FormatdataInicio</p>
        <button className="voltar--P1" onClick={VoltarButton}>
          Voltar
        </button>
        <h1> Data Início</h1>
        <input
          type="Date"
          placeholder="Data Inicio"
          className="register-input"
          value={dataInicio}
          onChange={(e) => setDataInicio(e.target.value)}
        />

        {error && <p className="error-message">{error}</p>}

        <button className="register-button" onClick={HandleClickGerarRelatorio}>
          Gerar Relatório
        </button>
      </div>
    </div>
  );
}

export default PagInserirData;

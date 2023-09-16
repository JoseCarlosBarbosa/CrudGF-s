import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import "./PagRelatorioGerado.css";
import { Container } from '@material-ui/core';
function GerarRelatorio() {

  const location = useLocation();
  const { dataInicio, dataFim } = location.state;
  const navigate = useNavigate();
  const [valorTotalId1, setvalorTotalId1] = useState([]);
  const [valorTotalId2, setvalorTotalId2] = useState([]);
  const [valorTotalId3, setvalorTotalId3] = useState([]);
  const [valorTotalId4, setvalorTotalId4] = useState([]);
  const [valorTotalVendido, setvaTotalVendido] = useState([]);
  const [valorTotalPago, setvalorTotalPago] = useState([]);
  const [valorTotalPagoCred, setvalorTotalPagoCred] = useState([]);
  const [valorTotalPagoDeb, setvalorTotalPagoDeb] = useState([]);
  const [valorTotalPagoPix, setvalorTotalPagoPix] = useState([]);
  const [valorTotalPagoDinheiro, setvalorTotalPagoDinheiro] = useState([]);
  const [valorTotalVendidoCred, setvalorTotalVendidoCred] = useState([]);
  const [valorTotalVendidoDebito, setvalorTotalVendidoDebito] = useState([]);
  const [valorTotalVendidoPix, setvalorTotalVendidoPix] = useState([]);
  const [valorTotalVendidoDinheiro, setvalorTotalVendidoDinheiro] = useState([]);

  const [valorTotal, setValorTotal] = useState([]);

  function formatarNumeroComDuasCasasDecimais(numero) {
    // Verifica se o valor recebido é numérico
    if (typeof numero !== 'number') {
      return 'NaN'; // Ou outra mensagem de erro, se preferir
    }

    // Formata o número com duas casas decimais
    const numeroFormatado = Math.floor(numero * 100) / 100;

    return numeroFormatado;
  }


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


  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/getValorID1?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalId1 = response.data[0].valorTotalGeral;

        setvalorTotalId1(valorTotalId1);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalId1]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/getValorID2?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalId2 = response.data[0].valorTotalGeral;

        setvalorTotalId2(valorTotalId2);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalId2]);


  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/getValorID3?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalId3 = response.data[0].valorTotalGeral;

        setvalorTotalId3(valorTotalId3);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalId3]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/getValorID4?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalId4 = response.data[0].valorTotalGeral;

        setvalorTotalId4(valorTotalId4);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalId4]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalVendido?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalVendido = response.data[0].valorTotalGeral;

        setvaTotalVendido(valorTotalVendido);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalVendido]);


  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalRecebido?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalPago = response.data[0].valorTotalPG;

        setvalorTotalPago(valorTotalPago);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalPago]);



  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalRecebidoCredito?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalPagoCred = response.data[0].valorTotalPG;

        setvalorTotalPagoCred(valorTotalPagoCred);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalPagoCred]);


  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalRecebidoDebito?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalPagoDeb = response.data[0].valorTotalPG;

        setvalorTotalPagoDeb(valorTotalPagoDeb);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalPagoDeb]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalRecebidoPix?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalPagoPix = response.data[0].valorTotalPG;

        setvalorTotalPagoPix(valorTotalPagoPix);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalPagoPix]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalRecebidoDinheiro?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalPagoDinheiro = response.data[0].valorTotalPG;

        setvalorTotalPagoDinheiro(valorTotalPagoDinheiro);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalPagoDinheiro]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalVendidoCredito?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalVendidoCred = response.data[0].valorTotalPG;

        setvalorTotalVendidoCred(valorTotalVendidoCred);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalVendidoCred]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalVendidoDebito?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalVendidoDebito = response.data[0].valorTotalPG;

        setvalorTotalVendidoDebito(valorTotalVendidoDebito);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalVendidoDebito]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalVendidoPix?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalVendidoPix = response.data[0].valorTotalPG;

        setvalorTotalVendidoPix(valorTotalVendidoPix);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalVendidoPix]);

  useEffect(() => {
    const FormatdataInicio = formatarDataBD(dataInicio);
    const FormatdataFim = formatarDataBD(dataFim);

    Axios.get(`http://localhost:3001/valorTotalVendidoDinheiro?dataInicio=${FormatdataInicio}&dataFim=${FormatdataFim}`)
      .then((response) => {
        console.log(response);
        const valorTotalVendidoDinheiro = response.data[0].valorTotalPG;

        setvalorTotalVendidoDinheiro(valorTotalVendidoDinheiro);
      })
      .catch((error) => {
        console.error('Erro ao gerar relatório:', error);
        // Adicione aqui o código para exibir uma mensagem de erro ao usuário, se necessário
      });
  }, [dataInicio, dataFim, valorTotalVendidoDinheiro]);

  return (
    <div className="mobile-screen-container">
      <div className="relatorio-container">
        <div className="relatorio-header">
          <h1 className="relatorio-titulo">Relatório Gerado</h1>
          <p className="relatorio-data">Data de Início </p>
          <p className="relatorio-dataT">{formatarDatauser(dataInicio)}</p>
          <p className="relatorio-data">Data de Fim </p>
          <p className="relatorio-dataT">{formatarDatauser(dataFim)}</p>
        </div>

        <div className="valor-total-container">
          <h1 className="valor-total-titulo">Valor Total Vendido + Contas Pagas</h1>
          <p className="valor-total">R${formatarNumeroComDuasCasasDecimais(valorTotal)}</p>
        </div>

        <div className="vendas-total-container">
          <h1 className="vendas-total-titulo">Vendas Total</h1>
          <p className="vendas-total">R${formatarNumeroComDuasCasasDecimais(valorTotalVendido)}</p>
          <h3 className="vendas-total-subtitulo">Formas de Pagamento de Vendas:</h3>

          <h3 className="vendas-total-subtitulo">CREDITO: R${formatarNumeroComDuasCasasDecimais(valorTotalVendidoCred)}</h3>
          <h3 className="vendas-total-subtitulo">DEBITO: R${formatarNumeroComDuasCasasDecimais(valorTotalVendidoDebito)}</h3>
          <h3 className="vendas-total-subtitulo">PIX: R${formatarNumeroComDuasCasasDecimais(valorTotalVendidoPix)}</h3>
          <h3 className="vendas-total-subtitulo">Dinheiro: R${formatarNumeroComDuasCasasDecimais(valorTotalVendidoDinheiro)}</h3>
        </div>

        <div className="vendas-funcionarios-container">
          <h1 className="vendas-funcionarios-titulo">Vendas Dos Funcionarios</h1>
          <p className="vendas-funcionarios-item">Codigo Funcionario 1 (Cainara) : R${formatarNumeroComDuasCasasDecimais(valorTotalId1)}</p>
          <p className="vendas-funcionarios-item">Codigo Funcionario 2 (Erica) : R${formatarNumeroComDuasCasasDecimais(valorTotalId2)}</p>
          <p className="vendas-funcionarios-item">Codigo Funcionario 3 (Debora) : R${formatarNumeroComDuasCasasDecimais(valorTotalId3)}</p>
          <p className="vendas-funcionarios-item">Codigo Funcionario 4 (Severina) : R${formatarNumeroComDuasCasasDecimais(valorTotalId4)}</p>
        </div>

        <div className="pagamento-contas-container">
          <h1 className="pagamento-contas-titulo">Pagamento Total Contas</h1>
          <p className="pagamento-contas-total">R${formatarNumeroComDuasCasasDecimais(valorTotalPago)}</p>
          <h2 className="pagamento-contas-subtitulo">Contas pagas por:</h2>

          <h3 className="pagamento-contas-subtitulo">CREDITO: R${formatarNumeroComDuasCasasDecimais(valorTotalPagoCred)}</h3>
          <h3 className="pagamento-contas-subtitulo">DEBITO: R${formatarNumeroComDuasCasasDecimais(valorTotalPagoDeb)}</h3>
          <h3 className="pagamento-contas-subtitulo">PIX: R${formatarNumeroComDuasCasasDecimais(valorTotalPagoPix)}</h3>
          <h3 className="pagamento-contas-subtitulo">Dinheiro: R${formatarNumeroComDuasCasasDecimais(valorTotalPagoDinheiro)}</h3>
        </div>

        <button className="voltar-button" onClick={() => navigate('/')}>
          Voltar
        </button>
      </div>
    </div>
  );

}

export default GerarRelatorio;
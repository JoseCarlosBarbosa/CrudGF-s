import React from "react";
import "./pagInicial.css";
import { useNavigate } from 'react-router-dom';

// Pagina Inicial de escolhas.

function PagInicial() {

  const Navigate = useNavigate();
  const handleClickVendaPI = () => {
    Navigate("/App")
  };


  const handleClickContasPI = () => {
    Navigate("/Contas")
  };

  const handleClickRelatorioPI = () => {
    Navigate("/relatorioIFdatas")
  };

  const handleClickFechamento = () => {
    Navigate("/fechamentocaixa")
  };

  return (
    <div className="inicial--container-1">
      <div className="inicial-container-2">
        <h1 className="inicial-selecao">GF'S </h1>



        <button className="botao" onClick={handleClickVendaPI}>
          Cadastrar Venda
        </button>


        <button className="botao" onClick={handleClickContasPI}>
          Pagamento de Contas
        </button>


        <button className="botao" onClick={handleClickRelatorioPI}>
          Relatorio
        </button>


        <button className="botao" onClick={handleClickFechamento}>
          Fechamento Caixa
        </button>
      </div>
    </div>
  );
}

export default PagInicial;
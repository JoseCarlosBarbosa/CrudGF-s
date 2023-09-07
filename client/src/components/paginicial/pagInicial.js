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
    // Lógica a ser executada quando o terceiro botão é clicado
  };

  return (
    <div className="inicial--container-1">
      <div className="inicial-container-2">
        <h1 className="inicial-selecao">GF'S </h1>
          

        {/* Botão 1 */}
        <button className="botao" onClick={handleClickVendaPI}>
          Cadastrar Venda
        </button>

        {/* Botão 2 */}
        <button className="botao" onClick={handleClickContasPI}>
          Pagamento de Contas
        </button>

        {/* Botão 3 */}
        <button className="botao" onClick={handleClickRelatorioPI}>
          Relatorio
        </button>
      </div>
    </div>
  );
}

export default PagInicial;
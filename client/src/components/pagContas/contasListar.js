import React, { useState, useEffect } from "react";
import Axios from 'axios'; // Importe o Axios
import ContaItem from "./contaItem";
import { useNavigate } from "react-router-dom";
import "./contasListas.css";

function ContasListar() {
  const [listalContas, setListalContas] = useState([]);

  const navigate = useNavigate();

  const VoltarRegisterButton = () => {
    navigate("/"); 
  }
  useEffect(() => {
    Axios.get("http://localhost:3001/getContas")
      .then((response) => {
        const reversedListalContas = response.data.reverse();
        setListalContas(reversedListalContas);
      })
      .catch((error) => {
        console.error("Erro ao buscar contas:", error);
      });
  }, []);

  return (
    <div className="pag--ListContas">
    <button className="register-Voltar-Cadastrar" onClick={VoltarRegisterButton}>
      Voltar
    </button>
      <h1 className="titulo--contas"> Contas </h1>
      {listalContas.map((conta) => (
        <ContaItem
          key={conta.idcontas}
          idcontas={conta.idcontas}
          name={conta.name}
          codFunc={conta.codFunc}
          valorPago={conta.valorPago}
          dataConta={conta.dataConta}
          formaPagamento={conta.formaPagamento}
        />
      ))}
    </div>
  );
}

export default ContasListar;

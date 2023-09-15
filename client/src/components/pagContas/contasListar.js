import React, { useState, useEffect } from "react";
import Axios from 'axios'; // Importe o Axios
import ContaItem from "./contaItem";
import { useNavigate } from "react-router-dom";
import "./contasListas.css";

function formatarDatauser(data) {
  const dataObj = new Date(data);
  const dia = String(dataObj.getDate()).padStart(2, '0');
  const mes = String(dataObj.getMonth() + 1).padStart(2, '0');
  const ano = dataObj.getFullYear();
  return `${dia}/${mes}/${ano}`;
}


function ContasListar() {

  const [listalContas, setListalContas] = useState([]);

  const navigate = useNavigate();

  function getcontasatt (){ Axios.get("http://localhost:3001/getContas")
    .then((response) => {
      const reversedListalContas = response.data.reverse();
      setListalContas(reversedListalContas);
    })
    .catch((error) => {
      console.error("Erro ao buscar contas:", error);
    });}

  const VoltarRegisterButton = () => {
    navigate("/");
  }
  useEffect(() => {
    getcontasatt();
  }, []);


  return (
    <div className="pag--ListContas">
      <button className="register-Voltar-Cadastrar" onClick={VoltarRegisterButton}>
        Voltar
      </button>
      <h1 className="titulo--contas">Contas </h1>
      {listalContas.map((conta) => (
        <ContaItem

          key={conta.idcontas}
          idcontas={conta.idcontas}
          name={conta.name}
          codFunc={conta.codFunc}
          valorPago={conta.valorPago}
          dataConta={formatarDatauser(conta.dataConta)}
          formaPagamento={conta.formaPagamento}
          refreshList={getcontasatt}
        />
      ))}
    </div>
  );
}

export default ContasListar;

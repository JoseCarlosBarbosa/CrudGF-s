import React, { useState, useEffect } from "react";
import Axios from "axios";
import Vendas from '../vendas/vendasListar';
import { useNavigate } from "react-router-dom";
import "./pag2.css"
import { Container } from "@material-ui/core";

function Pag2() {
  const navigate = useNavigate();

  const VoltarRegisterButton = () => {
    navigate("/"); 
  }

  const [listaVendas, setListaVendas] = useState([]);
  
  useEffect(() => {
    Axios.get("http://localhost:3001/getVendas").then((response) => {
      const reversedListaVendas = response.data.reverse();
      setListaVendas(reversedListaVendas);
    });
  }, []);

  return (
    
    <div className="pag2-container">
      <Container>
      <button className="register-Voltar-Cadastrar" onClick={VoltarRegisterButton}>
        Voltar
      </button>
    
      </Container>
      <h1 className="titulo--vendas"> Vendas</ h1>
      {listaVendas.map((value) => (
        <Vendas
          key={value.id}
          listaVendas={listaVendas}
          setListaVendas={setListaVendas}
          id={value.id}
          name={value.name}
          codFunc={value.codFunc}
          valorVendido={value.valorVendido}
          dataVenda = {value.dataVenda}
          formaPagamentoVenda= {value.formaPagamentoVenda}
        />
      ))}
    </div>
  );
}

export default Pag2;

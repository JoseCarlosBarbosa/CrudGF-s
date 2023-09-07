import React, { useState, useEffect } from "react";

import "./contasListas.css";
import FormDialog from "../dialog/dialog";

function ContaItem(props) {
  const { open, setOpen } = useState(false);

  return (
    <> 
    <FormDialog 
    open= {open} 
    setOpen = {setOpen}
    id = {props.idcontas}
     name = {props.name} 
     codFunc ={props.codFunc}  
     valorPago ={props.valorPago} 
     dataConta = {props.dataConta}
     formaPagamento= {props.formaPagamento}
     listaLContas = {props.listaLContas}
     setListaLContas = {props.setListaLContas}
     
     />
    <div className="contasListar--container" >
        <h1 className="contas--Codvenda">Código da venda: {props.idcontas}</h1>
        <p className="contas--nome">Nome do Funcionário: {props.name}</p>
        <p className="contas--codFunc">Código do Funcionário: {props.codFunc}</p>
        <p className="contas--valorPago">Valor: {props.valorPago}</p>
        <p className="contas--dataConta">Data da Venda: {props.dataConta}</p>
        <p className="contas--formaPagamento">Forma de Pagamento: {props.formaPagamento}</p>
      </div>
      </>
  );
}


export default ContaItem;

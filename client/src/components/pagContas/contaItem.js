import React, { useState } from "react";
import "./contasListas.css";
import FormDialogConta from "./dialogContas";

export default function ContaItem(props) {
  const [open, setOpen] = useState(false);

  const handleClickConta = () => {
    setOpen(true);
  }

  return (
    <>
      <FormDialogConta
        open={open} 
        setOpen={setOpen}
        idcontas={props.idcontas}
        name={props.name} 
        codFunc={props.codFunc}  
        valorPago={props.valorPago} 
        dataConta={props.dataConta}
        formaPagamento={props.formaPagamento}
        refreshList={props.refreshList}
        listalContas={props.listalContas}
        setListalContas={props.setListalContas}
      />
      <div className="contasListar--container" onClick={handleClickConta}>
        <h1 className="contas--Codvenda">Cód Pagamento: {props.idcontas}</h1>
        <p className="contas--nome">Nome do Funcionário: {props.name}</p>
        <p className="contas--codFunc">Código do Funcionário: {props.codFunc}</p>
        <p className="contas--valorPago">R$: {props.valorPago}</p>
        <p className="contas--dataConta">Data Conta: {props.dataConta}</p>
        <p className="contas--formaPagamento">Forma de Pagamento: {props.formaPagamento}</p>
      </div>
    </>
  );
}

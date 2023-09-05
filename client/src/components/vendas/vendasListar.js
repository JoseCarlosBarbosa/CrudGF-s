import React, { useState } from "react"; // Importe o useState
import "./vendas.css"
import FormDialog from "../dialog/dialog";


// Formulario de edição;
export default function Venda(props) {
  const [open, setOpen] = useState(false); // Use o estado do useState

  const handleClickVenda = () => {
    setOpen(true);
    
  };

  return (
    <> 
    <FormDialog 
    open= {open} 
    setOpen = {setOpen}
    id = {props.id}
     name = {props.name} 
     codFunc ={props.codFunc}  
     valorVendido ={props.valorVendido} 
     dataVenda = {props.dataVenda}
     formaPagamentoVenda= {props.formaPagamentoVenda}
     listVenda = {props.listVenda}
     setListVenda = {props.setListVenda}
     
     />
      <div className="vendas--container" onClick={
        ()=> handleClickVenda()}>
        <h1 className="vendas--venda">Código da venda: {props.id}</h1>
        <p className="vendas--nome">Nome do Funcionário: {props.name}</p>
        <p className="vendas--codFunc">Código do Funcionário: {props.codFunc}</p>
        <p className="vendas--valorVendido">Valor: {props.valorVendido}</p>
        <p className="vendas--dataVenda">Data da Venda: {props.dataVenda}</p>
        <p className="vendas--formaPagamentoVenda">Forma de Pagamento: {props.formaPagamentoVenda}</p>
      </div>
      {/* Renderizar o diálogo somente se 'open' for verdadeiro */}
      
    </>
  );
}
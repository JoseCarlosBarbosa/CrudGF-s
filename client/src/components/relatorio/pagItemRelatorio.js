import React, { useState } from "react";
import FormDialogConta from "./dialogContas";

export default function RelatorioItem(props){

    
    return (
        <>
          <FormDialogConta
            open={open} 
            setOpen={setOpen}
            dataRInicio={props.dataRInicio}
            dataRFim={props.dataRFim} 
            listalRelatorio={props.listalRelatorio}
            setlistalRelatorio={props.setlistalRelatorio}
          />
          <div className="contasListar--container">Relatorio
            <p className="data--Inicio">Data Inicio: {props.dataRInicio}</p>
            <p className="data--Fim">Data Final: {props.dataRFim}</p>
          </div>
        </>
      );

}
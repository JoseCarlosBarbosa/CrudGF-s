
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import React, { useState } from "react";



export default function FormDialog(props) { 
  const [editValues, setEditValues] = useState({
    idConta: props.idConta,
    name: props.name,
    codFunc: props.codFunc,
    valorPago: props.valorPago,
    dataConta: props.dataConta,
    formaPagamento:props.formaPagamento,
  });

const handleEditContas = () =>{
  Axios.put("http://localhost:3001/editContas", {
    idConta: editValues.idConta,
    name: editValues.name,
    codFunc: editValues.codFunc,
    valorPago: editValues.valorPago,
    dataConta: editValues.dataConta,
    formaPagamento:editValues.formaPagamento,
  });
  handleClose();
};

const { open, setOpen } = props;


const handleCloseContas = () => {
  setOpen(false);
};

const handleDeleteContas = () => {
  Axios.delete(`http://localhost:3001/deleteContas/${editValues.idConta}`);
  handleClose();

};

// Mudar valores
const handleChangeValues = value => {
  setEditValues(prevValues=>({
    ...prevValues,[value.target.idConta]: value.target.value,
  }));

};

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-label="form-dialog-tittle"
    >
      <DialogTitle idConta="forma-dialog-tittle"> Editar </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome do Funcionário"
          defaultValue={props.name}
          onChange = {handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="codFunc"
          defaultValue={props.codFunc}
          onChange = {handleChangeValues}
          label="ID do Funcionário"
          type="number"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="valorVendido"
          defaultValue={props.valorPago}
          onChange = {handleChangeValues}
          label="Valor Vendido"
          type="float"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="dataVenda"
          defaultValue={props.dataConta}
          onChange = {handleChangeValues}
          label="Data da Venda"
          type="varchar"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="formaPagamentoVenda"
          defaultValue={props.formaPagamento}
          onChange = {handleChangeValues}
          label="Forma De Pagamento"
          type="text"
          fullWidth
        />
    </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseContas} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDeleteContas} color="primary">
          Excluir
        </Button>
        <Button onClick={handleEditContas} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import React, { useState } from "react";

// abertura dialog para editar

export default function FormDialog(props) { 
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    codFunc: props.codFunc,
    valorVendido: props.valorVendido,
    dataVenda: props.dataVenda,
    formaPagamentoVenda:props.formaPagamentoVenda,
  });

const handleEditVenda = () =>{
  Axios.put("http://localhost:3001/edit", {
  id: editValues.id,
  name: editValues.name,
  codFunc: editValues.codFunc,
  valorVendido: editValues.valorVendido,
  dataVenda: editValues.dataVenda,
  formaPagamentoVenda: editValues.formaPagamentoVenda,
  });
  handleClose();
};

const { open, setOpen } = props;


const handleClose = () => {
  setOpen(false);
};

const handleDeleteVenda = () => {
  Axios.delete(`http://localhost:3001/delete/${editValues.id}`);
  handleClose();

};

// Mudar valores
const handleChangeValues = value => {
  setEditValues(prevValues=>({
    ...prevValues,[value.target.id]: value.target.value,
  }));

};

  return (
    <Dialog
      open={props.open}
      onClose={handleClose}
      aria-label="form-dialog-tittle"
    >
      <DialogTitle id="forma-dialog-tittle"> Editar </DialogTitle>
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
          defaultValue={props.valorVendido}
          onChange = {handleChangeValues}
          label="Valor Vendido"
          type="number"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="dataVenda"
          defaultValue={props.dataVenda}
          onChange = {handleChangeValues}
          label="Data da Venda"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="formaPagamentoVenda"
          defaultValue={props.formaPagamentoVenda}
          onChange = {handleChangeValues}
          label="Forma De Pagamento"
          type="text"
          fullWidth
        />
    </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDeleteVenda} color="primary">
          Excluir
        </Button>
        <Button onClick={handleEditVenda} color="primary">
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}
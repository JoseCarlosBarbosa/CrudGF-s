import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

export default function FormDialogConta(props) {
  const [editValues, setEditValues] = useState({
    idcontas: props.idcontas,
    name: props.name,
    codFunc: props.codFunc,
    valorPago: props.valorPago,
    dataConta: props.dataConta,
    formaPagamento: props.formaPagamento,
  });

  const navigate = useNavigate();

  const handleEditContas = () => {
    Axios.put("http://localhost:3001/editContas", {
      idcontas: editValues.idcontas,
      name: editValues.name,
      codFunc: editValues.codFunc,
      valorPago: editValues.valorPago,
      dataConta: editValues.dataConta,
      formaPagamento: editValues.formaPagamento,
    })
      .then(() => {
        handleCloseContas();
        navigate("/contasListar");
      })
      .catch((error) => {
        console.error("Erro ao editar conta:", error);
      });
  };

  const { open, setOpen } = props;

  const handleCloseContas = () => {
    setOpen(false);
  };

  const handleDeleteContas = () => {
    Axios.delete(`http://localhost:3001/deleteContas/${editValues.idcontas}`)
      .then(() => {
        handleCloseContas();
       
      })
      .catch((error) => {
        console.error("Erro ao excluir conta:", error);
      });
  };

  useEffect(() => {
    // Atualize o estado local quando as props mudarem (por exemplo, ao clicar em um item da lista).
    setEditValues({
      idcontas: props.idcontas,
      name: props.name,
      codFunc: props.codFunc,
      valorPago: props.valorPago,
      dataConta: props.dataConta,
      formaPagamento: props.formaPagamento,
    });
  }, [props]);

  const handleChangeValues = (event) => {
    const { id, value } = event.target;
    setEditValues((prevValues) => ({
      ...prevValues,
      [id]: value,
    }));
  };

  return (
    <Dialog open={open} onClose={handleCloseContas} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">Editar Conta</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Nome do Funcionário"
          value={editValues.name}
          onChange={handleChangeValues}
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="codFunc"
          value={editValues.codFunc}
          onChange={handleChangeValues}
          label="Código do Funcionário"
          type="number"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="valorPago"
          value={editValues.valorPago}
          onChange={handleChangeValues}
          label="Valor Pago"
          type="number"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="dataConta"
          value={editValues.dataConta}
          onChange={handleChangeValues}
          label="Data Conta"
          type="text"
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="formaPagamento"
          value={editValues.formaPagamento}
          onChange={handleChangeValues}
          label="Forma de Pagamento"
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

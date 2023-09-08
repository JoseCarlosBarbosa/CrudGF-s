import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./contas.css";


function Contas() {
  const initialValues = {
    name: "",
    codFunc: "",
    valorPago: "",
    dataConta: "",
    formaPagamento: "",
  };

  const [values, setValues] = useState(initialValues);
  // eslint-disable-next-line
  const [listalContas, setListalContas] = useState([]);

  const navigate = useNavigate();

  const VoltarButton = () => {
    navigate("/");
  }

  const HandleClickListar = () => {
    navigate("/contasListar");
  }

  const handleChangeValues = (e) => {
    const { name, value } = e.target;
    setValues((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const HandleClickCadastrar = () => {
    Axios.post("http://localhost:3001/registerConta", {
      name: values.name,
      codFunc: values.codFunc,
      valorPago: values.valorPago,
      dataConta: values.dataConta,
      formaPagamento: values.formaPagamento,
    })
    .then(() => {
      // Atualize a lista de contas após o cadastro
      Axios.get("http://localhost:3001/getContas")
        .then((response) => {
          const reversedListalContas = response.data.reverse();
          setListalContas(reversedListalContas);
        })
        .catch((error) => {
          console.error("Erro ao buscar contas:", error);
        });

      // Limpe os campos após o cadastro
      setValues(initialValues);
    });
  };

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
    <div className="app-container">
      <div className='register-container'>
        <h1 className="register-title">GF'S </h1>
        <h2 className="sub-title">Contas </h2>
        <button className="voltar--P1" onClick={VoltarButton}>
          Voltar
        </button>
        <input
          type='text'
          name='name'
          placeholder='Nome'
          className='register-input'
          onChange={handleChangeValues}
          value={values.name}
        />
        <input
          type='int'
          name='codFunc'
          placeholder='Codigo Funcionario'
          className='register-input'
          onChange={handleChangeValues}
          value={values.codFunc}
        />
        <input
          type="number"
          name="valorPago"
          placeholder="R$ 00,00"
          className="register-input"
          onChange={handleChangeValues}
          value={values.valorPago}
        />
        <input
          type="date"
          name="dataConta"
          placeholder="Data Conta"
          className="register-input"
          onChange={handleChangeValues}
          value={values.dataConta}
        />
        <div className="register-input">
          {values.formaPagamento}
        </div>
        
        <select
          name="formaPagamento"
          className="register-input"
          onChange={handleChangeValues}
          value={values.formaPagamento}
        >
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Pix">Pix</option>
        </select>

        <div className="container-button">
          <button className="register-button" onClick={HandleClickCadastrar} >
            Cadastrar
          </button>
          <button className="listar-button" onClick={HandleClickListar}>
            Listar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contas;

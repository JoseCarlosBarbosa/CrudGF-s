
import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";
import { useNavigate } from 'react-router-dom'; // Certifique-se de que a rota correta seja importada

// Cadastrar Vendas

function App() {


const inicialvalue = {
  name: "",
  codFunc: "",
  valorVendido: "",
  dataVenda: "",
  formaPagamentoVenda: "",
};

const [values, setValues] = useState(inicialvalue);
 
const [listaVendas, setListaVendas] = useState();

const Navigate =useNavigate()

console.log(listaVendas);

const handleChangeValues = (value) => {
  setValues(prevValue =>({
    ...prevValue,
    [value.target.name]: value.target.value,
  }))
};


const VoltarRegisterButton =() =>{
  Navigate("/");
}

const handleClickList = () =>{
    Navigate("/pagLista")
}

//registrar
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", { 
       // Correção aqui
      name: values.name,
      codFunc: values.codFunc,
      valorVendido: values.valorVendido,
      dataVenda: values.dataVenda,
      formaPagamentoVenda: values.formaPagamentoVenda,
    }).then(() => {
      setListaVendas([
        ...listaVendas,
        {
        name: values.name,
        codFunc: values.codFunc,
        valorVendido: values.valorVendido,
        dataVenda: values.dataVenda,
        formaPagamentoVenda: values.formaPagamentoVenda,
        },
      ]);
      setValues(inicialvalue)

    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getVendas").then((response)=>{
      setListaVendas(response.data);
  });
  },[]);


  return (
    <div className="app-container">
     <div className='register-container'>
      <h1 className = "register-title">GF'S </h1>
      <h2 className = "sub-title">Cadastrar Venda </h2>
        <button className="voltar--P1" onClick={VoltarRegisterButton}>
          Voltar
        </button>
        
        <input 
          type='text' 
          name='name'
          placeholder='Nome'
          className='register-input' 
          onChange={handleChangeValues}
          value = {values.name}
        />

        <input 
          type='int' 
          name='codFunc'
          placeholder='Codigo Funcionario'
          className='register-input'
          onChange={handleChangeValues}
          value = {values.codFunc}
        />

        <input 
          type="float"  
          name="valorVendido" 
          placeholder="Valor" 
          className="register-input" 
          onChange={handleChangeValues}
          value = {values.valorVendido}
        />

        <input 
          type="date"  
          name="dataVenda" 
          placeholder="Data da Venda" 
          className="register-input" 
          onChange={handleChangeValues}
          value = {values.dataVenda}
        />
         <div className="register-input">
          {values.formaPagamentoVenda}
        </div>
        <select
          name="formaPagamento"
          className="register-input"
          onChange={handleChangeValues}
          value={values.formaPagamentoVenda}
        >
          <option value="Débito">Débito</option>
          <option value="Crédito">Crédito</option>
          <option value="Dinheiro">Dinheiro</option>
          <option value="Pix">Pix</option>
        </select>
      
      <div className="container-buton">
      
      <button className = "register-button" 
      onClick={() => handleClickButton()}

        >
          Cadastrar
        </button>

        <button className = "listar-button" 
      onClick={() => handleClickList()}

        >
          Listar
        </button>

      </div>
     </div>
    </div>
  );
}

export default App;

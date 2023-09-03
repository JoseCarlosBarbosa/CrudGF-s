
import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";

import { useNavigate } from 'react-router-dom';



function App() {
const [values, setValues] = useState();
 
const [listaVendas, setListaVendas] = useState();

const Navigate =useNavigate()

console.log(listaVendas);

const handleChangeValues = (value) => {
  setValues(prevValue =>({
    ...prevValue,
    [value.target.name]: value.target.value,
  }))
};



const handleClickList = () =>{
    Navigate("/pag2")
}

//registrar
  const handleClickButton = () => {
    Axios.post("http://localhost:3001/register", {  // Correção aqui
      name: values.name,
      codFunc: values.codFunc,
      valorVendido: values.valorVendido,
    }).then(() => {
      setListaVendas([
        ...listaVendas,
        {
        name: values.name,
        codFunc: values.codFunc,
        valorVendido: values.valorVendido,
        },
      ]);
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
      <input 
      type='text' 
      name='name'
      placeholder='Nome'
      className='register-input' 
      onChange={handleChangeValues}
      />
      <input 
      type='text' 
      name='codFunc'
      placeholder='Codigo Funcionario'
      className='register-input'
      onChange={handleChangeValues}
      />
      <input 
      type="text"  
      name="valorVendido" 
      placeholder="Valor" 
      className="register-input" 
      onChange={handleChangeValues}
      />
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

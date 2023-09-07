import axios from 'axios'; 
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 


function Contas() {
    const Navigate = useNavigate();

    const VoltarButton = () =>{
        Navigate("/");
    }
    const inicialvalue ={
      name:"",
      codFunc:"",
      valorPago: "",
      dataConta: "",
      formaPagamento: "",
      
    }
    
    
    const [values,setValues] = useState(inicialvalue);
    
    const[listaContas, setListaContas] = useState([]);

  


    const handleChangeValues = (value) => {
      setValues(prevValue =>({
        ...prevValue,
        [value.target.name]: value.target.value,
      }))

    };

    const HandleClickCadastrar = () => {
      axios.post("http://localhost:3001/registerConta",{
      name: values.name,
      codFunc: values.codFunc,
      valorPago: values.valorPago,
      dataConta: values.dataConta,
      formaPagamento: values.formaPagamento,
      }).then(() =>{
        setListaContas([
          ...listaContas,{
          name: values.name,
          codFunc: values.codFunc,
          valorPago: values.valorPago,
          dataConta: values.dataConta,
          formaPagamento: values.formaPagamento,
          },
        ]);
        setValues(inicialvalue)
      });
    };


   
    const HandleClickListar = () =>{
        Navigate("/contasListar")
    }

   
    

  return (
    <div className="app-container">
     <div className='register-container'>
      <h1 className = "register-title">GF'S </h1>
      <h2 className = "sub-title">Contas </h2>
      
        <button className="voltar--P1" onClick={VoltarButton}>
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
          name="valorPago" 
          placeholder="Valor" 
          className="register-input" 
          onChange={handleChangeValues}
          value = {values.valorPago}
        />

        <input 
          type="text"  
          name="dataConta" 
          placeholder="Data Conta" 
          className="register-input" 
          onChange={handleChangeValues}
          value = {values.dataConta}
        />
        <input 
          type="text"  
          name="formaPagamento" 
          placeholder="Forma de Pagamento" 
          className="register-input" 
          onChange={handleChangeValues}
          value = {values.formaPagamento}
          
        />
      
      <div className="container-buton">
      
      <button className = "register-button" onClick={HandleClickCadastrar} >
          Cadastrar
        </button>

        <button className = "listar-button" onClick={HandleClickListar}>
          Listar
        </button>

      </div>
     </div>
    </div>
  );
}

export default Contas;

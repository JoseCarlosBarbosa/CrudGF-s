import { useNavigate } from 'react-router-dom'; 


function Contas() {
    const Navigate = useNavigate();

    const VoltarButton = () =>{
        Navigate("/");
    }


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
          
        />

        <input 
          type='int' 
          name='codFunc'
          placeholder='Codigo Funcionario'
          className='register-input'
      
        />

        <input 
          type="float"  
          name="valorPago" 
          placeholder="Valor" 
          className="register-input" 
       
        />

        <input 
          type="text"  
          name="dataCompra" 
          placeholder="Data da Compra" 
          className="register-input" 
      
        />
        <input 
          type="text"  
          name="formaPagamento" 
          placeholder="Forma de Pagamento" 
          className="register-input" 
          
        />
      
      <div className="container-buton">
      
      <button className = "register-button"  >
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

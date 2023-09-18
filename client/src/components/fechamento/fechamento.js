import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";
import "./fechamento.css";
import Axios from 'axios';


function FechamentoCaixa() {
    const navigate = useNavigate();

    const [dataFCaixa, setDataFCaixa] = useState('');
    const [trocoFCaixa, setTrocoFCaixa] = useState('');

    const voltarButton = () => {
        navigate('/');
    };

    const registrarbutton = () => {
        // Certifique-se de que dataFCaixa e trocoFCaixa sejam valores válidos
        if (!dataFCaixa || !trocoFCaixa) {
            console.error('Por favor, preencha todos os campos.');
            return;
        }

        Axios.post("http://localhost:3001/registrarTroco", {
            dataFCaixa,
            trocoFCaixa,
        })
            .then(response => {
                console.log('Dados enviados com sucesso', response.data);
                // Limpe os campos após o envio bem-sucedido
                setDataFCaixa('');
                setTrocoFCaixa('');
            })
            .catch(error => { console.error('Erro ao enviar dados:', error) });
    };

    return (
        <div className="fechamento-mobile-screen-container">
            <div className="fechamento-header">
                <h1 className="fechamento-titulo">Fechamento do dia</h1>
            </div>

            <h1 className="valor-total-caixa">
                Valor Total em Caixa: R$
            </h1>
            <h1 className="valor-caixa">
                Valor Vendas (Dinheiro): R$
            </h1>
            <h1 className="valor-conta">
                Valor Contas (Dinheiro): R$
            </h1>
            <h1 className="valor-troco">
                Troco: R$
            </h1>
            <h1 className="Cadastro-data-troco">
                Cadastrar Data e Troco
            </h1>
            <input
                type='date'
                name='dataFCaixa'
                placeholder='Data Fechamento'
                className='register-input'
                value={dataFCaixa}

            />
            <input
                type='float'
                name='trocoFCaixa'
                placeholder='Troco Caixa'
                className='register-input'
                value={trocoFCaixa}

            />

            <button className="voltarRG--P1" onClick={voltarButton}>
                Voltar
            </button>

            <button className="registrarRG--P1" onClick={registrarbutton}>
                Registrar
            </button>
        </div >
    );
}

export default FechamentoCaixa;

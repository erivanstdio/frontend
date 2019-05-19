import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.png'
import "./styles.css";
//  é preciso anotar o valor do input em alguma variavel,
// pois nao eh como um formulario html. onde havia um action, sera usado o onSumbit.
// o submit do form devera ser manipulado tambem por js. "this" refere-se a classe do componente
// handleSubmit uma arrowfunction, metodo sera chamado toda vez que o formulario receber um submit
// eh preciso ter o valor que o usuario digitou no input, ai pra obter, eh com o estado do react.
// state: uma variavel, um objeto javascript, armazenado dentro da própria classe 
// toda vez que o state tiver alguma alteracao, o render sera executado novamente.
// isso eh importante pq o estado contem as informacoes principais que o componente precisa pra ser exibido da maneira correta.
//


export default class Main extends Component {
    state = {
        newBox: ""
    };
    // o "e" como parametro eh so pra esse preventDefalt mesmo, assim nao vai ter redirect.
    handleSubmit = async (e) => {
        //para prevenir o comportamento padrao do form de atualizar paginas em cada submit:
        e.preventDefault();

        const response = await api.post('/boxes', {
            title: this.state.newBox
        });

        this.props.history.push(`/box/${response.data._id}`);
    };

    handleInputChange = (e) => {
        this.setState({ newBox: e.target.value });
    };
    
    render() {
        return (
            <div id="main-conteiner">
                <form onSubmit={this.handleSubmit}>
                    <img src={logo} alt=""/>
                    <input 
                        placeholder = "Criar uma box"
                        value={this.state.newBox}
                        onChange={this.handleInputChange}
                    ></input>
                    <button type="submit">Criar</button>
                </form>
            </div>
        );
    }
}

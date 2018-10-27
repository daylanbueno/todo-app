import React, { Component } from 'react';
import axios from 'axios';
import PageHeader  from '../../src/main/template/pageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'localhost:3003/api/todo'
export default class Todo extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = { description: '', list:[] }

    }

    adicionar() {
        const descricao = this.state.description;
        axios.post(URL, { descricao } )
        .then(resp => 
            console.log('Deu bom')
        )
    }

    alteracao(event) {
        this.setState({...this.state, description: event.target.value});
    }

    render() {
        return (
            <div>
                <PageHeader nome='Tarefas ' small='cadastro'> </PageHeader>
                <TodoForm  adicionarTaferefa={this.adicionar.bind(this)} 
                           description={this.state.description}
                           alteracao={this.alteracao.bind(this)} />
                <TodoList />
             </div>
        );
    }
}
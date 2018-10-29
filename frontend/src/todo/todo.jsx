import React, { Component } from 'react';
import axios from 'axios';
import PageHeader  from '../../src/main/template/pageHeader';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const URL = 'http://localhost:3000/api/todos';

export default class Todo extends React.Component  {
    
    constructor(props) {
        super(props);
        this.state = { description: '', list:[] }
        this.atualiza();

    }

    atualiza() {
        axios.get(`${URL}?sort=-createAt`)
        .then(resp => {
           this.setState({...this.state, description:'', list: resp.data})
           console.log(this.state.list)
        });
    }

    adicionar() {
        const description = this.state.description;
        console.log(description);
        axios.post(URL, {  description  })
        .then(resp =>   this.atualiza())
    }

    remover(todo) {
        console.log(todo)
        axios.delete(`${URL}/${todo._id}`)
        .then(resp => this.atualiza());
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
                <TodoList list={this.state.list} 
                          remover={this.remover.bind(this)}  />
             </div>
        );
    }
}
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

    marcaFeito(todo){
        axios.put(`${URL}/${todo._id}`,{...todo, done: true})
        .then(resp => this.atualiza(this.state.description));
    }

    marcaPendente(todo){
        axios.put(`${URL}/${todo._id}`,{...todo, done: false})
        .then(resp => this.atualiza(this.state.description));
    }

    atualiza(description = '') {
        const pesquisa = description ? `&description__regex=/${description}/` : '';
        axios.get(`${URL}?sort=-createAt${pesquisa}`)
        .then(resp => {
           this.setState({...this.state, description: description, list: resp.data})
        });
    }

    pesquisar(){
        this.atualiza(this.state.description);
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

    prenchimentoInput(event) {
        this.setState({...this.state, description: event.target.value});
    }

    limpar() {
     this.atualiza();
    }

    render() {
        return (
            <div>
                <PageHeader nome='Tarefas ' small='cadastro'> </PageHeader>
                <TodoForm  adicionarTaferefa={this.adicionar.bind(this)} 
                           description={this.state.description}
                           prenchimentoInput={this.prenchimentoInput.bind(this)}
                           pesquisar={this.pesquisar.bind(this)}
                           limpar={this.limpar.bind(this)} />
                <TodoList list={this.state.list} 
                          remover={this.remover.bind(this)} 
                          marcaFeito={this.marcaFeito.bind(this)}
                          marcaPendente={this.marcaPendente.bind(this)}/>
             </div>
        );
    }
}
import React from 'react';
import { Grid } from '../main/template/Grid';
import Botao from '../main/template/Botao';

export default class extends  React.Component {
     
    render() {
        const keyHandler = (e) => {
            if (e.key === 'Enter') {
                this.props.pesquisar();
            }
        }
        return(
            <div role='form' className='todoForm'> 
            <Grid cols='12 9 10'>
                    <input id='description' 
                           className='form-control'
                           placeholder='Adicione uma tarefa'
                           value={this.props.description}
                           onChange={this.props.prenchimentoInput}
                           onKeyUp={keyHandler}>
                    </input>
            </Grid>
            <Grid cols='12 3 2'> 
                <Botao style='primary' onClick={this.props.adicionarTaferefa}  icon='plus'/>
                <Botao style='info'    onClick={this.props.pesquisar}    icon='search'/>
                <Botao style='default' onClick={this.props.limpar}      icon='close'/>
            </Grid>      
            </div>
        )
    }
}
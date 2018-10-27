import React from 'react';
import { Grid } from '../main/template/Grid';
import Botao from '../main/template/Botao';

export default class extends  React.Component {
    render() {
        return(
            <div role='form' className='todoForm'> 
            <Grid cols='12 9 10'>
                    <input id='description' 
                           className='form-control'
                           placeholder='Adicione uma tarefa'
                           value={this.props.description}
                           onChange={this.props.alteracao}>
                    </input>
            </Grid>
            <Grid cols='12 3 2'> 
                <Botao onClick={this.props.adicionarTaferefa} style='primary'  icon='plus'/>
            </Grid>      
            </div>
        )
    }
}
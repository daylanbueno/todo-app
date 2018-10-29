import React from 'react';
import Botao from '../main/template/Botao';

export default props => {

    const renderRows = () => {
        const list = props.list || [];
        console.log(list)
        return list.map(todo => (
            <tr key={todo._id}> 
                <td className={todo.done ? 'estiloMarcado': ''}>{todo.description}</td>
                <td>
                    <Botao style='success' icon='check' onClick={() => props.marcaFeito(todo)} hide={todo.done}/>
                    <Botao style='warning' icon='undo' onClick={() => props.marcaPendente(todo)} hide={!todo.done} />
                    <Botao style='danger' icon='trash-o' onClick={() => props.remover(todo)} />
                </td>
            </tr>
        ));
    }

    return (
        <table className='table'> 
                <thead> 
                    <tr> 
                        <th>Descrição</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody> 
                    {renderRows()}
                </tbody>
            </table>
        
    )
}
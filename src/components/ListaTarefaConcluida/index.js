import React from 'react';
import { ListaContainer, TarefaConcluida } from './styled';

const ListaTarefasConcluidas = ({ itemConcluido }) => {
    const tarefasConcluidas = itemConcluido.map((item) => {
        return (
            <TarefaConcluida>
                <p>{item}</p>
            </TarefaConcluida>
        );
    });

    return (
        <ListaContainer>
            <ul>
                {tarefasConcluidas}
            </ul>
        </ListaContainer>
    );
};

export default ListaTarefasConcluidas;
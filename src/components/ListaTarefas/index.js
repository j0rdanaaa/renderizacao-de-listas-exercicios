import { useState } from 'react';
import {
    InputContainer,
    ListaContainer,
    ListaTarefasContainer,
    Tarefa,
    TaskInput,
    AddTaskButton,
    RemoveButton,
    LinhaHorizontal,
} from './styled';
import bin from '../../assets/bin.png';
import ListaTarefasConcluidas from '../ListaTarefaConcluida';

export function ListaTarefas() {
    const [lista, setLista] = useState(['Fazer exercícios', 'Estudar React']);
    const [novaTarefa, setNovaTarefa] = useState('');
    const onChangeTarefa = (event) => {
        setNovaTarefa(event.target.value);
    };
    const adicionaTarefa = () => {
        const novaLista = [...lista, novaTarefa];
        setLista(novaLista);
        setNovaTarefa('');
    };
    // Adicionando tarefas com o btn Enter
    const adicionaTarefaComEnter = (event) => {
        if (event.keyCode === 13) {
            adicionaTarefa();
        }
    };

    // Adicionando tarefa concluída a lista de tarefas concluídas:
    // estado
    const [itemConcluido, setItemConcluido] = useState([]);

    // função
    const adicionaTarefaConcluida = (tarefa) => {
        const listaTarefasConcluidas = lista.filter((item) => item === tarefa);
        const novaListaTarefasConcluidas = [
            ...itemConcluido,
            listaTarefasConcluidas,
        ];
        setItemConcluido(novaListaTarefasConcluidas);
    };

    const removeTarefa = (tarefa) => {
        // capturando tarefa concluída:
        adicionaTarefaConcluida(tarefa);

        //lógica da remoção de tarefa:
        const listaFiltrada = lista.filter((item) => item !== tarefa);
        setLista(listaFiltrada);
    };
    return (
        <ListaTarefasContainer>
            <InputContainer>
                <TaskInput
                    placeholder="Digite aqui uma tarefa"
                    value={novaTarefa}
                    onChange={onChangeTarefa}
                    onKeyDown={(event) => adicionaTarefaComEnter(event)}
                />
                <AddTaskButton onClick={adicionaTarefa}>
                    Adicionar
                </AddTaskButton>
            </InputContainer>
            <ListaContainer>
                <ul>
                    {lista.map((tarefa, index) => {
                        return (
                            <Tarefa key={index}>
                                <p>{tarefa}</p>
                                <RemoveButton
                                    onClick={() => removeTarefa(tarefa)}
                                >
                                    <img src={bin} alt="" width="16px" />
                                </RemoveButton>
                            </Tarefa>
                        );
                    })}
                </ul>
            </ListaContainer>
            <LinhaHorizontal />
            <ListaTarefasConcluidas itemConcluido={itemConcluido} />
        </ListaTarefasContainer>
    );
}
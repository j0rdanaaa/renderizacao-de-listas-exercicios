import styled from 'styled-components';

export const ListaContainer = styled.div`
    width: 400px;
    display: flex;
    flex-direction: column;
    overflow: auto;
`;

export const TarefaConcluida = styled.li`
    text-decoration: line-through;
    /* color: #D3D3D3; */
    color: lightgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    border: 1px solid black;
    border-radius: 10px;
    padding: 6px 8px;
    transition: background-color 0.3s;
    &:hover {
        background-color: lightblue;
    }
`;
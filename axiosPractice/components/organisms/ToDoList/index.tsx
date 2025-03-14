import { Box, styled } from '@mui/material';
import { Header } from '../../molecules/Header';
import { useEffect, useState } from 'react';
import { ToDo } from '../../molecules/ToDo';
import { AddTodo, DeleteTodo, FetchTodos } from '../../../services';

export interface Todo {
    id: number;
    todo: string;
}

const StyledBox = styled(Box)(({ theme }) => ({
    width: '25%',
    gap: '16px',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '12px',
    padding:"12px",
    boxShadow: `0 0 5px 2px ${theme.palette.grey[300]}`,
}));


const StyledOuterBox = styled(Box)({
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const ToDoList = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [typedValue, setTypedValue] = useState<string>('');

    useEffect(() => {
        FetchTodos().then((response) => setTodos(response));
    }, []);

    const createTodo = () => {
        AddTodo(typedValue).then(() =>
            FetchTodos().then((response) => setTodos(response))
        );
        setTypedValue("");
    };

    const deleteTodo = (id: number) => {
        DeleteTodo(id).then(() =>
            FetchTodos().then((response) => setTodos(response))
        );
    };

    return (
        <StyledOuterBox>
            <StyledBox>
                <Header
                    value={typedValue}
                    onChange={(event) => setTypedValue(event.target.value)}
                    createTodo={() => createTodo()}
                />
                {todos.map((todo) => (
                    <ToDo
                        key={todo.id}
                        todo={todo.todo}
                        deleteTodo={() => deleteTodo(todo.id)}
                    />
                ))}
            </StyledBox>
        </StyledOuterBox>
    );
};

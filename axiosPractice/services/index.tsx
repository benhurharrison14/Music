import axios from 'axios';

export const FetchTodos = async () => {
    try {
        const response = await axios.get('http://localhost:4500/Todos');
        return response.data;
    } catch (err) {
        console.log(err);
    }
};

export const AddTodo = async (value: string) => {
    try {
        await axios.post('http://localhost:4500/Todos', { todo: value });
    } catch (err) {
        console.log(err);
    }
};

export const UpdateTodo = async (id: number, todo: string) => {
    try {
        await axios.put(`http://localhost:4500/Todos/${id}`, { todo });
    } catch (error) {
        console.log(error);
    }
};

export const DeleteTodo = async (id: number) => {
    try {
        await axios.delete(`http://localhost:4500/Todos/${id}`);
    } catch (err) {
        console.log(err);
    }
};

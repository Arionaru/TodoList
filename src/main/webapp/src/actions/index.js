import {ADD_TODO, CHANGE_TODO, DELETE_TODO, FETCH_TODO} from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:8080/todos';

export const createTodo = (title) => {
    return (dispatch) => {
        return axios.post(apiUrl, {title: title, done: false})
            .then(response => {
                dispatch(createTodoSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const createTodoSuccess = (data) => {
    return {
        type: ADD_TODO,
        payload: {
            id: data.id,
            title: data.title,
            done: data.done,
        }
    }
};

export const changeTodo = (todo) => {

    return (dispatch) => {
        return axios.put(`${apiUrl}/${todo.id}`, {
            id: todo.id,
            title: todo.title,
            done: todo.done,
        })
            .then(response => {
                dispatch(changeTodoSuccess(response.data));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const changeTodoSuccess = (data) => {
    return {
        type: CHANGE_TODO,
        payload: {
            id: data.id,
            title: data.title,
            done: data.done,
        }
    }
};


export const deleteTodoSuccess = id => {
    return {
        type: DELETE_TODO,
        payload: {
            id
        }
    }
};

export const deleteTodo = id => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(() => {
                dispatch(deleteTodoSuccess(id));
            })
            .catch(error => {
                throw(error);
            });
    };
};

export const fetchTodos = (todos) => {
    return {
        type: FETCH_TODO,
        todos
    }
};

export const fetchAllTodos = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchTodos(response.data))
            })
            .catch(error => {
                throw(error);
            });
    };
};
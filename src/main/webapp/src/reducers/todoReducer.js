import {ADD_TODO, CHANGE_TODO, DELETE_TODO, FETCH_TODO} from '../actions/types';

export default function todoReducer(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case CHANGE_TODO:
            return state.map((todo) => todo.id === action.id ? {...todo, editing: !todo.editing} : todo);
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        case FETCH_TODO:
            return action.todos;
        default:
            return state;
    }
}
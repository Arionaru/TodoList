import React, {useState} from 'react';
import Checkbox from "./Checkbox";
import {useDispatch} from "react-redux";
import {changeTodo, deleteTodo} from '../actions';

export default (props) => {

    const textStyle = {
        textDecoration: 'line-through',
    };

    const dispatch = useDispatch();
    const [edited, setEdited] = useState(false);
    const [todo, setTodo] = useState(props.todo);

    const handleInputChange = (e) => {
        setTodo({...todo, title: e.target.value});
    };

    const handleCheckboxChange = (e) => {
        setTodo({...todo, done: e.target.checked});
    };

    return (
        <div>
            {edited && (
                <input type="text"
                       name="title"
                       value={todo.title}
                       key={todo.id}
                       onChange={(e) => handleInputChange(e)}
                />
            )}
            {!edited && !todo.done && (
                <label onClick={() => setEdited(true)}>{todo.title}</label>
            )}
            {!edited && todo.done && (
                <label style={textStyle} onClick={() => setEdited(true)}>{todo.title}</label>
            )}

            <Checkbox
                todo={todo}
                handleCheckboxChange={handleCheckboxChange}
            />
            <button type="button"
                    onClick={() => {
                        dispatch(changeTodo(todo));
                        setEdited(!edited);
                    }}
            >
                {edited &&('save') || ('edit')}
            </button>
            <button type="button"
                    onClick={() => {
                        dispatch(deleteTodo(todo.id));
                    }}
            >
                X
            </button>
        </div>
    );
};
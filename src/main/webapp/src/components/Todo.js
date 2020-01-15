import React from 'react';
import Checkbox from "./Checkbox";
import {useDispatch} from "react-redux";
import {deleteTodo} from '../actions';

export default ({todo}) => {
    const dispatch = useDispatch();

    return (
        <div>
            {todo.title}
            <Checkbox todo={todo}/>
            <button className="btn btn-danger" type="button"
                    onClick={() => {
                        dispatch(deleteTodo(todo.id));
                    }}
            >
                X
            </button>
        </div>
    );
};
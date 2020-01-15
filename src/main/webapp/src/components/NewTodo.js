import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {createTodo} from '../actions';


function NewTodo() {
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    const handleInputChange = (e) => {
        setTitle(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createTodo(title));
        setTitle('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="todo"
                        className="form-control"
                        name="todo"
                        onChange={handleInputChange}
                        value={title}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">Add todo</button>
                </div>
            </form>
        </div>
    );
}

export default NewTodo;
import React from 'react';
import Todo from '../components/Todo';
import {useSelector} from "react-redux";

function TodoList() {
    const todos = useSelector(({todos}) => todos);

    if (!todos.length) {
        return (
            <div>
                No Todos
            </div>
        )
    }
    return (
        <div>
            {todos.map(todo => {
                return (
                    <Todo
                        todo={todo}
                        key={todo.id}/>
                );
            })}
        </div>
    );
}

export default TodoList;
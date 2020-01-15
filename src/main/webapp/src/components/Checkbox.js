import React, {useState} from "react";
import {changeTodo} from '../actions';
import {useDispatch} from "react-redux";


function Checkbox({todo}) {
    const dispatch = useDispatch();
    const [done, setDone] = useState(todo.done);

    return (
        <input type='checkbox'
               checked={done}
               onChange={(event) => {
                   setDone(event.target.checked);
                   todo.done = !done;
                   dispatch(changeTodo(todo));
               }}
        />
    )

}

export default Checkbox;
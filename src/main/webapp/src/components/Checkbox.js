import React from "react";

function Checkbox(props) {
    return (
        <input type='checkbox'
               checked={props.todo.done}
               onChange={(event) => {
                   props.handleCheckboxChange(event);
               }}
        />
    )
}

export default Checkbox;
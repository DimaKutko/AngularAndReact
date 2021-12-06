import React, {useState, useContext} from "react";
import Context from './context'

const TodoItem = ({title, id, completed}) => { 
    const {updateComplete, removeTodo} = useContext(Context)

    const classChecked = ['todo'];
    if (completed) {
        classChecked.push('completed')
    }

 
    return (
        <li className={classChecked.join(' ')}> 
            <label>
                <input 
                    type="checkbox" 
                    checked={completed}
                    onChange={() => updateComplete(id)}    
                />
                <span>{title}</span>
                <button onClick={() => removeTodo(id)}>x</button>
            </label>
        </li>
    )
};

export default TodoItem;

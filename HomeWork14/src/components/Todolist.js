import React from "react";

const Todolist = (props) => {
    const myRef = React.useRef(null);
    function add(e)
    {
        e.preventDefault();
        props.action.addTodo(myRef.current.value)
    }
    return (
        <div>
            <h1>TodoList</h1>
            <input type="text" ref={myRef} /><button onClick={add}>Add</button>
            {props.state.length > 0 ? 
                <div>
                    <h2>Count todo {props.state.length}</h2>
                    {props.state.map(u => 
                        <div>
                            {u.title} <span onClick={() => props.action.removeTodo(u)}>x</span>
                        </div>
                    )}
                </div>
                :
                <span>No Todo</span>   
            }
            <div>
                <button onClick={() => props.action.addTodo(prompt())}>Add Todo</button>
            </div>
        </div>
    )
};
export default Todolist;

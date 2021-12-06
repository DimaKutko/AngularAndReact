import React, {useState, useEffect} from "react";
import TodoList from "./TodoList";
import Context from "./context"

 const TodoManager = () => {
    const [todos, setTodo] = useState([
        /*{id:1, title: 'First todo', completed: false},
        {id:2, title: 'Second todo', completed: false}*/
    ]);
    const [todoTitle, setTodoTitle] = useState('')

    useEffect(() => {
        const data = localStorage.getItem('todos')
        setTodo(JSON.parse(data))
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = (event) => {
        if (event.key === 'Enter') {
            setTodo([
                ...todos,
                {
                    id: Date.now(),
                    title: todoTitle,
                    completed: false
                }
            ])
            setTodoTitle('') //очистим строку после добавления
        }
    }

    //удаление todo
    const removeTodo = (id) => {
        setTodo(todos.filter(todo => {
            return todo.id !== id
        }))
    }

    //изменение completed
    const updateComplete = (id) => {
        setTodo(todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed
            }
            return todo
        }))
    }

    return (
        <Context.Provider value={{removeTodo, updateComplete}}>
            <div>
                <h1>Todo List</h1>
                <input
                    type="text"
                    value={todoTitle}
                    onChange={event => setTodoTitle(event.target.value)}
                    onKeyPress={addTodo}
                />
                <TodoList todos={todos} />
            </div>
        </Context.Provider>
    )
};
export default TodoManager;

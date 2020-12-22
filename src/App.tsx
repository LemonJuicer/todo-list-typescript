import './App.css';

import { useEffect, useState } from 'react';

import Form from './components/Form';
import TodoList from './components/TodoList';

function App(): React.ReactElement {
    const [inputText, setInputText] = useState<string>('');
    const [todos, setTodos] = useState<todo[]>([]);
    const [status, setStatus] = useState<string>('all');
    const [filteredTodos, setFilteredTodos] = useState<todo[]>([]);

    useEffect(() => {
        if (localStorage.getItem('todos') === null) {
            localStorage.setItem('todos', JSON.stringify([]));
        } else {
            setTodos(JSON.parse(localStorage.getItem('todos') || '{}'));
        }
    }, []);

    useEffect(() => {
        switch (status) {
            case 'completed':
                setFilteredTodos(todos.filter(item => item.completed === true));
                break;
            case 'uncompleted':
                setFilteredTodos(
                    todos.filter(item => item.completed === false),
                );
                break;
            default:
                setFilteredTodos(todos);
                break;
        }

        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos, status]);
    return (
        <div className="App">
            <header>
                <h1>Todo List</h1>
            </header>
            <Form
                inputText={inputText}
                setInputText={setInputText}
                todos={todos}
                setTodos={setTodos}
                setStatus={setStatus}
            />
            <TodoList
                todos={todos}
                setTodos={setTodos}
                filteredTodos={filteredTodos}
            />
        </div>
    );
}

export default App;

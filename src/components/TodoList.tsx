import Todo from './Todo';

type Props = {
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    filteredTodos: Todo[];
};

function TodoList({
    todos,
    setTodos,
    filteredTodos,
}: Props): React.ReactElement {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo
                        setTodos={setTodos}
                        todos={todos}
                        todo={todo}
                        key={todo.id}
                    >
                        {todo.text}
                    </Todo>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

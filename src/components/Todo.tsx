type Props = {
    setTodos: (todos: Todo[]) => void;
    todos: Todo[];
    todo: Todo;
    children: string;
};

function Todo({ setTodos, todos, todo, children }: Props): React.ReactElement {
    function deleteHandler() {
        setTodos(todos.filter(item => item.id !== todo.id));
    }
    function completeHandler() {
        setTodos(
            todos.map(item => {
                if (item.id === todo.id) {
                    return {
                        ...item,
                        completed: !item.completed,
                    };
                }
                return item;
            }),
        );
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                {children}
            </li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fas fa-check" />
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash" />
            </button>
        </div>
    );
}

export default Todo;

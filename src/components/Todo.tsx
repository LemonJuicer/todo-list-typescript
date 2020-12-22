interface Props {
    setTodos: (todos: todo[]) => void;
    todos: todo[];
    todo: todo;
    key: number;
    children: string;
}

function Todo(props: Props): React.ReactElement {
    function deleteHandler() {
        props.setTodos(props.todos.filter(item => item.id !== props.todo.id));
    }
    function completeHandler() {
        props.setTodos(
            props.todos.map(item => {
                if (item.id === props.todo.id) {
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
            <li
                className={`todo-item ${
                    props.todo.completed ? 'completed' : ''
                }`}
            >
                {props.children}
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

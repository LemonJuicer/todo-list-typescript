import Todo from './Todo';

interface Props {
    todos: todo[];
    setTodos: (todos: todo[]) => void;
    filteredTodos: todo[];
}

const TodoList: React.FC<Props> = props => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {props.filteredTodos.map(item => (
                    <Todo
                        setTodos={props.setTodos}
                        todos={props.todos}
                        todo={item}
                        key={item.id}
                    >
                        {item.text}
                    </Todo>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;

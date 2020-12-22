interface Props {
    inputText: string;
    setInputText: (inputText: string) => void;
    todos: todo[];
    setTodos: (todos: todo[]) => void;
    setStatus: (status: string) => void;
}

function Form(props: Props): React.ReactElement {
    function inputTextHandler(event: React.ChangeEvent<HTMLInputElement>) {
        props.setInputText(event.target.value);
    }
    function submitTodoHandler(event: React.MouseEvent) {
        event.preventDefault();
        props.setTodos([
            ...props.todos,
            {
                text: props.inputText,
                completed: false,
                id: Math.random() * 1000,
            },
        ]);
        props.setInputText('');
    }
    function statusHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        props.setStatus(event.target.value);
    }
    return (
        <form>
            <input
                value={props.inputText}
                onChange={inputTextHandler}
                type="text"
                className="todo-input"
            />
            <button
                onClick={submitTodoHandler}
                className="todo-button"
                type="submit"
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                {/* eslint-disable-next-line jsx-a11y/no-onchange */}
                <select
                    onChange={statusHandler}
                    name="todos"
                    className="filter-todo"
                >
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
}

export default Form;

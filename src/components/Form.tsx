type Props = {
    inputText: string;
    setInputText: (inputText: string) => void;
    todos: Todo[];
    setTodos: (todos: Todo[]) => void;
    setStatus: (status: Status) => void;
};

function Form({
    inputText,
    setInputText,
    todos,
    setTodos,
    setStatus,
}: Props): React.ReactElement {
    function inputTextHandler(event: React.ChangeEvent<HTMLInputElement>) {
        setInputText(event.target.value);
    }
    function submitTodoHandler(event: React.MouseEvent) {
        event.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                completed: false,
                id: Math.random() * 1000,
            },
        ]);
        setInputText('');
    }
    function statusHandler(event: React.ChangeEvent<HTMLSelectElement>) {
        setStatus(event.target.value as Status);
    }
    return (
        <form>
            <input
                value={inputText}
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

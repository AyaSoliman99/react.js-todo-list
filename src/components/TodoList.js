import TodoItem from "./TodoItem";
function TodoList(props) {
    return (
        <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">todo list</h3>
            <TodoItem />
            <button className="btn btn-danger d-block text-capitalize mt-5" type="button">clear list</button>
        </ul>
    );
}

export default TodoList;
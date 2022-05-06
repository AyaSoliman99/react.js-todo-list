

function TodoItem(props) {
    return (
        <li className="list-group-item d-flex justify-content-between my-2 text-capitalize">
            <h5>title</h5>
            <div className="todo-icon">
                <span className="mx-2 text-success">
                    <i className="fas fa-pen"/>
                </span>
                <span className="mx-2 text-danger">
                    <i className="fas fa-trash"/>
                </span>
            </div>
        </li>
    );
}

export default TodoItem;
import TodoItem from "./TodoItem";
function TodoList(props) {
    const todoItems = props.items;
    return (
        <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">todo list</h3>
            {todoItems.map(item => (<TodoItem
                key={item.id}
                title={item.item}
                // we passed the function in arrow function for not be invoked before we click the button
                handleDlete={() => props.handleDelet(item.id)}
                handleEdit={()=> props.handleEdit(item.id) } />))}
            <button onClick={props.clearListHandler} className="btn btn-danger d-block text-capitalize mt-5" type="button">clear list</button>
        </ul>
    );
}

export default TodoList;
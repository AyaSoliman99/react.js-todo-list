import "./App.scss";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
// import uuid from "uuid";
import { v4 as uuidv4 } from "uuid";

// import useId from 'react-use-uuid';

function App() {
  const [itemObject, setItem] = useState({
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  });
  const handleChange = (e) => {
    setItem((prevState) => ({
      ...prevState,
      item: e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: itemObject.id,
      item: itemObject.item,
    };

    const updatedArray = [...itemObject.items, newItem];

    setItem((prevState) => ({
      ...prevState,
      items: updatedArray,
      item: "",
      id: uuidv4(),
      editItem:false,
    }));
  };

  // method for deleting item
  const deleteHandler = (id) => {
    const filterdItems = itemObject.items.filter((item) => item.id !== id);
    setItem((prevState) => ({
      ...prevState,
      items: filterdItems,
    }));
  };

  // method for editing item
  const editHandler = (id) => {
    const filterdItems = itemObject.items.filter((item) => item.id !== id);

    const selectedItem =itemObject.items.find(item => item.id === id);

    setItem((prevState) => ({
      ...prevState,
      items: filterdItems,
      item: selectedItem.item,
      editItem: true,
      id:id
    }));
  };

  // method for clearing the list
  const clearList = () => {
    setItem((prevState) => ({
      ...prevState,
      items: [],
    }));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput
            item={itemObject.item}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={itemObject.editItem}
          />
          <TodoList
            items={itemObject.items}
            clearListHandler={clearList}
            handleDelet={deleteHandler}
            handleEdit={editHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

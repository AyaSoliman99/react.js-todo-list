import "./App.scss";
import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";
function App() {
 const[itemObject,setItem]= useState({
    items: [],
    id: 0,
    item: "",
    editItem: false
 });
 const handleChange = (e) => {
    setItem({item:e.target.value})
  }
  return (
    <div className="container">
      <div className="row">
        <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">Todo Input</h3>
          <TodoInput item={itemObject.item} handleChange={handleChange} />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;

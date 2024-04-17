import React, { useState } from 'react';
import './App.css'
import { v4 as uuidv4 } from 'uuid';
function App(props) {
  let arrayTodo = [
    {
      id: 1,
      name: 'Apple',
      price: 200,

    },
    {
      id: 1,
      name: 'Samsung',
      price: 2000,
    }
  ];
  const [show, setShow] = useState(true);
  const [todos, setTodos] = useState(arrayTodo);
  const [todo, setTodo] = useState({ name: "", price:"" });
  const [isUpdate, setisUpdate] = useState(false);
  function hanldeChangeInput(e) {
    let { name, value } = e.target;
    setTodo({ ...todo, [name]: value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (isUpdate) {
      let result = todos.map(item => {
        if(item.id == todo.id){
          return todo;
        }else{
          return item;
        }
      });
      setTodos(result);
      setisUpdate(false)

    } else {
      let datasubmit = {
        ...todo,
        name: (todo.name),
        price: (todo.price),
        id: uuidv4(),
        // id:Math.floor(Math.random()*1000 +3),
      }
      setTodos([...todos, datasubmit]);
      setTodos({ name: "", price: "" })
      // console.log("Check button", datasubmit);
    }
  }
  function hanldeDelete(id) {
    console.log("Id deleted:", id);
    let result = todos.filter(item => item.id != id);
    console.log("Result", result);
    setTodos(result);
  }
  function hanldeUpdate(item) {
    setTodo(item);
    setisUpdate(true);
    console.log("To do nhap vao: ", item);
  }
  return (
    <div className='container'>
      <button onClick={() => setShow(!show)} >Show </button>
      <div className='content-form'>
        <h1>Add To do</h1>
        {show && (
          <form onSubmit={handleSubmit} >
            <div className="form-group">
              <label>Name: </label>
              <input type="text" className="form-control" name="name" value={todo.name} id="name" onChange={hanldeChangeInput} placeholder="Enter name" />
            </div>
            <div className="form-group">
              <label>Price: </label>
              <input type="number" className="form-control" name="price" id="price" value={todo.price} onChange={hanldeChangeInput} placeholder="Enter Price" />
            </div>
            <button type="submit" className=" btn-submit">{isUpdate ? "Update" : "Add"}</button>
          </form>
        )}
      </div>
      <div className='content-table'>
        <h1>To do list</h1>
        <table className='table-todo'>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>

            </tr>
          </thead>
          <tbody>
            {todos.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>

                  <td>
                    <button onClick={() => hanldeUpdate(item.id)}>Update</button>
                    <button onClick={() => hanldeDelete(item.id)}>Delete</button>

                  </td>

                </tr>
              )
            }
            )
            }

          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
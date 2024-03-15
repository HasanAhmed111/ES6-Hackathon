import React, { useState } from 'react';

const User_Profile_Section = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') {
      alert("Please Enter Todo");
      return;
    }

    setTodos([...todos, inputValue]);
    setInputValue('');
  };

  const editTodo = (index) => {
    const newValue = prompt("Enter Updated Value", todos[index]);
    if (newValue !== null) {
      const updatedTodos = [...todos];
      updatedTodos[index] = newValue;
      setTodos(updatedTodos);
    }
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  return (
    <>
      <div className="head">
        {/* <div>
          <img src="https://cdn-icons-png.freepik.com/512/3176/3176366.png" width="45px" alt="todo-icon" />
          <h1 className="h1">Todo App</h1>
        </div> */}
      </div>
      <div className="body">
        <div className="overlay h-100 w-100">
          <div className="img text-center">
            <div className="box">
              <h2 className="fw-bold my-2 fs-4">TODO List</h2>
              <div>
                <input
                  className="input"
                  placeholder="Enter What Todo?"
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <br />
                <br />
                <button className="btn btn-white" onClick={addTodo}>ADD TODO</button>
                <button className="btn btn-white" onClick={deleteAll}>DELETE ALL</button>
                <div className="w-100">
                  <ul>
                    {todos.map((todo, index) => (
                      <li key={index}>
                        {todo}
                        <button className="btn my-4 text-white edi" onClick={() => editTodo(index)}>EDIT</button>
                        <button className="btn my-4 text-white remo" onClick={() => deleteTodo(index)}>Delete</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { User_Profile_Section };

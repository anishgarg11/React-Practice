import React, { useState } from "react";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({}); // input the value

  const handleInputChange = (value) => {
    setInputValue({id:value, content:value, checked:false });
    // console.log(inputValue)
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id:"", content:"", checked:""}); // return an emppty value if value is same

  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>

        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};

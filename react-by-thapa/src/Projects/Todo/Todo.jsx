import React, { useState } from "react";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoDateTime } from "./TodoDateTime";
import { TodoList } from "./TodoList";
import { getLocalStorageTododata, setLocalStorageTododata } from "./TodoLocalStorageData";

export default function Todo() {
  const [task, setTask] = useState(() => getLocalStorageTododata());

   // store the value in the array
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;

    if (!content) return; // to check if the input field is empty or not.

    // To check if the data is already existing or not
    // ------------------ OR ----------------
    // It is Used for String don't add same value in the array, using includes() method
    // if (task.includes(inputValue)) return;

    // It is Used for Object
    const ifTodoContentMatched = task.find(
      (currTask) => currTask.content === content
    );
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]); // Add new- "inputValue" and prevoius - "prevTask" Task
  };

  
  setLocalStorageTododata(task)

  // Delete a each task
  const handleDelete = (value) => {
    const updateTask = task.filter((currTask) => currTask.content !== value);
    setTask(updateTask);
  };

  // Clear All Task
  const handleAllClear = () => {
    setTask([]);
  };

  // todo handleChecked
  const handleChecked = (content) => {
    const updatedTask = task.map((currTask) => {
      if (currTask.content === content) {
        return { ...currTask, checked: !currTask.checked };
      } else {
        return currTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <TodoDateTime />
      </header>
      <TodoForm onAddTodo={handleFormSubmit} />
      {/* Use map() method and Icons */}
      <section className="myUnOrderList">
        <ul>
          {task.map((currTask) => {
            return (
              <TodoList
                key={currTask.id} // Use a unique identifier for the key
                index={currTask.id}
                data={currTask.content}
                checked={currTask.checked}
                handleDelete={handleDelete}
                onhandleCheckedTodo={handleChecked}
              />
            );
          })}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleAllClear}>
          Clear All
        </button>
      </section>
    </section>
  );
}

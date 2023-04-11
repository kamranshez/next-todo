"use client";
import React, { useState } from "react";

export default function ToDo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Task 1", completed: false },
    { todoText: "Task 2", completed: true },
    { todoText: "Task 3", completed: false },
    { todoText: "Task 4", completed: false },
    { todoText: "Task 5", completed: false },
    { todoText: "Task 6", completed: true },
  ]);

  const onClickHandler = (meraElm: any) => {
    console.log("meraElm", meraElm);

    // map runs on array, and returns an array
    const newTodos = todos.map((todo) => {
      console.log("todo: ", todo);
      if (todo.todoText == meraElm.todoText) {
        todo.completed = !todo.completed; // false he to true krdo, true he to false kardo
      }
      return todo;
    });

    console.log(newTodos);
    setTodos(newTodos);
  };
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo("");
  };

  const deleteTodo = (meraTodo: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == meraTodo.todoText) return false;
      return true;
    });
    console.log("old todos", todos, "new todos", newTodos);
    setTodos(newTodos);
  };

  return (
    <>
      <div>ToDo</div>
      <input
        placeholder="add todo text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button onClick={addTodo}>Add</button>

      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? "green" : "orange",
                fontStyle: "oblique",
                listStyle: "none",
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onClick={() => {
                  onClickHandler(elm);
                }}
              />
              {elm.todoText}
              <button
                onClick={() => {
                  deleteTodo(elm);
                }}
              >
                {"  "}
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

import React from "react";
import { useTodo } from "../context";
import TodoItem from "../context/TodoItem";

function DisplayTodos() {
  const { todos } = useTodo();
  return (
    <>
      {todos.length === 0 ? (
        <h1>No todos added please add some to see it</h1>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="w-full">
            <TodoItem todo={todo} />
          </div>
        ))
      )}
    </>
  );
}

export default DisplayTodos;

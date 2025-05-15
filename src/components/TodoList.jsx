import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, onDelete, onEdit }) {
  if (!todos.length) return <p className="text-gray-500 text-center">No todos</p>;

  return (
    <div className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
}


import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null); // todo being edited

  const handleAddOrUpdate = (title, description) => {
    if (!title.trim() || !description.trim()) return;

    if (editTodo) {
      setTodos(
        todos.map((t) =>
          t.id === editTodo.id ? { ...t, title, description } : t
        )
      );
      setEditTodo(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title,
        description,
      };
      setTodos([...todos, newTodo]);
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (todo) => {
    setEditTodo(todo); // send to input field
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">Todo App</h1>
      <TodoInput onSubmit={handleAddOrUpdate} editTodo={editTodo} />
      <TodoList todos={todos} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
}

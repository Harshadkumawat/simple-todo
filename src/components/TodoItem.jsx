import React from "react";

export default function TodoItem({ todo, onDelete, onEdit }) {
  return (
    <div className="bg-gray-50 border rounded p-3 flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{todo.title}</h3>
        <p className="text-sm text-gray-600">{todo.description}</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onEdit(todo)}
          className="text-blue-500 hover:underline"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(todo.id)}
          className="text-red-500 hover:underline"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

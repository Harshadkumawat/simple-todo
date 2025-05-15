import React, { useEffect, useState } from "react";

export default function TodoInput({ onSubmit, editTodo }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editTodo) {
      setTitle(editTodo.title);
      setDescription(editTodo.description);
    }
  }, [editTodo]);

  const handleSubmit = () => {
    onSubmit(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex flex-col gap-2 mb-4">
      <input
        type="text"
        placeholder="Title"
        className="border rounded px-3 py-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        className="border rounded px-3 py-2"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        {editTodo ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
}

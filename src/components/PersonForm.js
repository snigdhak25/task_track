import React, { useState, useEffect } from "react";

function PersonForm({ onSubmit, editingTask }) {
  const [name, setName] = useState("");

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
    } else {
      setName("");
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onSubmit(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter task"
          className="w-full p-3 bg-gray-600 text-gray-100 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
        <button
          type="submit"
          className="px-4 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200"
        >
          {editingTask ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default PersonForm;
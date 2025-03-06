import React from "react";

function PersonItem({ task, onEdit, onDelete }) {
  return (
    <div className="flex justify-between items-center p-4 bg-gray-600 rounded-lg mb-3 shadow-md hover:shadow-lg transition duration-200">
      <span className="text-gray-100 flex-1">{task.name}</span>
      <div className="space-x-2">
        <button
          onClick={() => onEdit(task)}
          className="p-2 text-indigo-400 hover:text-indigo-300 transition duration-200"
          title="Edit"
        >
          ✏️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="p-2 text-red-400 hover:text-red-300 transition duration-200"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}


export default PersonItem;
import React from "react";
import PersonItem from "./PersonItem";

function PersonList({ tasks, onEdit, onDelete }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center">No tasks added yet!</p>
      ) : (
        tasks.map((task) => (
          <PersonItem key={task.id} task={task} onEdit={onEdit} onDelete={onDelete} />
        ))
      )}
    </div>
  );
}


export default PersonList;
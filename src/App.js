import React, { useState, useEffect } from "react";
import PersonForm from "./components/PersonForm";
import PersonList from "./components/PersonList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleSubmit = async (name) => {
    if (editingTask) {
      const updatedTask = { ...editingTask, name };
      setTasks(tasks.map((t) => (t.id === editingTask.id ? updatedTask : t)));
      setEditingTask(null);
    } else {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify({ title: name }),
        headers: { "Content-type": "application/json" },
      });
      const newTask = await response.json();
      const taskWithId = { id: Date.now(), name };
      setTasks([...tasks, taskWithId]);
    }
  };

  const handleDelete = async (id) => {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
      method: "DELETE",
    });
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 flex flex-col">
      {/* Header */}
      <header className="py-6 bg-gray-900 shadow-lg">
        <h1 className="text-3xl font-semibold text-center text-gray-100">
          Task Tracker
        </h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center py-8">
        <div className="w-full max-w-lg bg-gray-700 rounded-xl shadow-2xl p-6">
          <PersonForm onSubmit={handleSubmit} editingTask={editingTask} />
          <PersonList tasks={tasks} onEdit={handleEdit} onDelete={handleDelete} />
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-900 text-gray-400 text-center">
        <p>&copy; 2025 Task Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}


export default App;
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const addTask = async (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, ...task }),
    });

    const data = await res.json();

    setTasks([...tasks, data]);
  };

  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  const toggleAddPanel = () => {
    setShowAddTask(!showAddTask);
  };

  return (
    <div className="container">
      <Header onAdd={toggleAddPanel} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
    </div>
  );
};

export default App;

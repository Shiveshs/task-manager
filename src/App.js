import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import TaskManager from "./Components/Pages/TaskManager/TaskManager";
import TaskForm from "./Components/Pages/TaskForm/TaskForm";
import Layout from "./Components/Layout/Layout";

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const handleTaskAdd = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleTaskEdit = (updatedTasks) => {
    setTasks(updatedTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <TaskManager
              tasks={tasks}
              onTaskDelete={handleDeleteTask}
              onTaskEdit={handleTaskEdit}
            />
          }
        />
        <Route
          path='task-form'
          element={<TaskForm onTaskAdd={handleTaskAdd} />}
        />
      </Route>
    </Routes>
  );
};

export default App;

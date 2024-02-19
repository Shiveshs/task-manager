import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskManager from './Components/Pages/TaskManager/TaskManager';
import TaskForm from './Components/Pages/TaskForm/TaskForm';
import Layout from './Components/Layout/Layout';

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleTaskAdd = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route index element={<TaskManager tasks={tasks} />} />
        <Route path="task-form" element={<TaskForm onTaskAdd={handleTaskAdd} />} />
      </Route>
    </Routes>
  );
}

export default App;
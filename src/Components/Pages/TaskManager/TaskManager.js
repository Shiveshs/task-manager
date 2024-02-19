import React, { useState } from "react";
import {
  Paper,
  Typography,
  List,
  Card,
  CardContent,
  Button,
} from "@mui/material";
import TaskForm from "../TaskForm/TaskForm";

const TaskManager = ({ tasks, onTaskDelete, onTaskEdit }) => {
  const [editingTask, setEditingTask] = useState(null);

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  const onDateSort = (tasks) => {
    const sortedTasks = [...tasks].sort((a,b)=> new Date(b.deadline) - new Date(a.deadline));
    //return sorted by date
    return sortedTasks;
  }

  

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        margin: "1%",
        maxWidth: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}>
      <Typography variant='h4' align='center' gutterBottom>
        Task Manager
      </Typography>
      {tasks.length === 0 ? (
        <Typography variant="body1" align="center">
          No tasks available.
        </Typography>
      ):(<List>
        {onDateSort(tasks).map((task, index) => (
          <Card
            key={index}
            style={{
              marginBottom: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <CardContent>
              <Typography variant='h6'>
                <strong>{task.title}</strong>
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {task.description}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {task.deadline}
              </Typography>
            </CardContent>
            <CardContent sx={{ display: "flex" }}>
              <Button
                variant='outlined'
                color='primary'
                onClick={() => handleEdit(task)}
                sx={{ margin: "2%" }}>
                Edit
              </Button>
              <Button
                variant='outlined'
                color='secondary'
                onClick={() => onTaskDelete(index)}
                sx={{ margin: "2%" }}>
                Delete
              </Button>
            </CardContent>
          </Card>
        ))}
      </List>)}
      {editingTask && (
        <TaskForm
          onTaskAdd={(updatedTask, isEdit) => {
            if (isEdit) {
              // Update the existing task
              const updatedTasks = [...tasks];
              updatedTasks[tasks.indexOf(editingTask)] = updatedTask;
              onTaskEdit(updatedTasks);
            } else {
              // Add a new task
              onTaskEdit([...tasks, updatedTask]);
            }
            handleCancelEdit();
          }}
          taskToEdit={editingTask}
        />
      )}
    </Paper>
  );
};

export default TaskManager;

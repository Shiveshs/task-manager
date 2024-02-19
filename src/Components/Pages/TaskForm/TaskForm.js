import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ onTaskAdd, taskToEdit }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If taskToEdit is provided, populate the form with task details
    if (taskToEdit) {
      setTitle(taskToEdit.title || "");
      setDescription(taskToEdit.description || "");
      setDeadline(taskToEdit.deadline || "");
    }
  }, [taskToEdit]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDeadlineChange = (e) => {
    setDeadline(e.target.value);
  };

  const handleSubmit = () => {
    const newTask = { title, description, deadline };
    if (taskToEdit) {
      // If taskToEdit is provided, it's an edit operation
      onTaskAdd(newTask, true); // Pass a second parameter to indicate it's an edit
    } else {
      onTaskAdd(newTask); // Otherwise, it's an add operation
    }
    navigate("/");
  };

  return (
    <Box boxShadow={3} p={3} borderRadius={8}>
      <form>
        <TextField
          label='Title'
          variant='outlined'
          fullWidth
          margin='normal'
          value={title}
          onChange={handleTitleChange}
        />
        <TextField
          label='Description'
          variant='outlined'
          fullWidth
          multiline
          rows={4}
          margin='normal'
          value={description}
          onChange={handleDescriptionChange}
        />
        <TextField
          label='Deadline'
          variant='outlined'
          type='date'
          fullWidth
          margin='normal'
          value={deadline}
          onChange={handleDeadlineChange}
          InputLabelProps={{ shrink: true }}
        />
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          {taskToEdit ? "Update Task" : "Add Task"}
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;

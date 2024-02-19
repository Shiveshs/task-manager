import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ onTaskAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [storyPoint, setStoryPoint] = useState("");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleStoryPointChange = (e) => {
    setStoryPoint(e.target.value);
  };

  const handleSubmit = () => {
    const newTask = { title, description, storyPoint };
    onTaskAdd(newTask);
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
          label='Story Point'
          variant='outlined'
          fullWidth
          margin='normal'
          value={storyPoint}
          onChange={handleStoryPointChange}
        />
        <Button variant='contained' color='primary' onClick={handleSubmit}>
          Add Task
        </Button>
      </form>
    </Box>
  );
};

export default TaskForm;

import React from "react";
import { Paper, Typography, List, ListItem, ListItemText } from "@mui/material";

const TaskManager = ({ tasks }) => {
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
        <Typography variant='body1' align='center'>
          No tasks available.
        </Typography>
      ) : (
        <List>
          {tasks.map((task, index) => (
            <ListItem key={index} alignItems='flex-start'>
              <ListItemText
                primary={<strong>{task.title}</strong>}
                secondary={task.description}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default TaskManager;

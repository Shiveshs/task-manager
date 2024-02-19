import React from "react";
import { Paper, Typography, List, ListItem, ListItemText, Card, CardContent, Button } from "@mui/material";

const TaskManager = ({ tasks, onDeleteTask }) => {
  const handleDelete = (index) => {
    onDeleteTask(index);
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: "20px",
        margin: "1%",
        maxWidth: "90%",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Task Manager
      </Typography>
      {tasks.length === 0 ? (
        <Typography variant="body1" align="center">
          No tasks available.
        </Typography>
      ) : (
        <List>
          {tasks.map((task, index) => (
            <Card key={index} style={{ marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <CardContent>
                <Typography variant="h6">
                  <strong>{task.title}</strong>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.description}
                </Typography>
              </CardContent>
              <Button variant="outlined" color="secondary" onClick={() => handleDelete(index)}>
                Delete
              </Button>
            </Card>
          ))}
        </List>
      )}
    </Paper>
  );
};

export default TaskManager;
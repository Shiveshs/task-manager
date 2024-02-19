import React from "react";
import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  const pages = [
    { name: "Task Manager", target: "/" },
    {
      name: "Create task",
      target: "/task-form",
    },
  ];
  return (
    <header>
      <AppBar position='static'>
        <Container maxWidth='xl'>
          <Toolbar>
            <Box>
                {pages.map((page, index)=>(
                    <Link key={page.target+index} to={page.target}>
                        <Button
                        color="inherit"
                        variant="contained"
                        sx={{ marginLeft: "20px", fontSize: "600"}}
                        >
                            {page.name}
                        </Button>
                    </Link>
                ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;

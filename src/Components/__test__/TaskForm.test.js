import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import '@testing-library/jest-dom/extend-expect';

import TaskForm from '../Pages/TaskForm/TaskForm';
test('renders TaskForm component', () => {
  render(
    <Router>
      <TaskForm onTaskAdd={() => {}} />
    </Router>
  );

  expect(screen.getByLabelText('Title')).toBeInTheDocument();
  expect(screen.getByLabelText('Description')).toBeInTheDocument();
  expect(screen.getByLabelText('Deadline')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Add Task' })).toBeInTheDocument();
});

test('handles form submission', () => {
  const mockOnTaskAdd = jest.fn();
  render(
    <Router> {/* Wrap TaskForm with Router */}
      <TaskForm onTaskAdd={mockOnTaskAdd} />
    </Router>
  );

  fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'Test Title' } });
  fireEvent.change(screen.getByLabelText('Description'), { target: { value: 'Test Description' } });
  fireEvent.change(screen.getByLabelText('Deadline'), { target: { value: '2022-12-31' } });

  fireEvent.click(screen.getByRole('button', { name: 'Add Task' }));

  expect(mockOnTaskAdd).toHaveBeenCalledWith({
    title: 'Test Title',
    description: 'Test Description',
    deadline: '2022-12-31',
  });
});
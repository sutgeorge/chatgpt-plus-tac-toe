import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

test('renders the Tic Tac Toe title', () => {
  render(<App />);
  const heading = screen.getByText(/tic tac toe/i);
  expect(heading).toBeInTheDocument();
});

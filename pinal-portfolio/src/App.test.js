import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio name', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /Pinal Prajapati/i })).toBeInTheDocument();
});

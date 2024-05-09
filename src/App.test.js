import { render, screen } from '@testing-library/react';
import App from './App';

test('renders String Calculator header', () => {
  render(<App />);
  
  const headerElement = screen.getByText('String Calculator', { selector: 'h3' });
  
  expect(headerElement).toBeInTheDocument();
});

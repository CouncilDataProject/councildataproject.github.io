import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock("react-ga");

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/City of Seattle, Washington/i);
  expect(linkElement).toBeInTheDocument();
});

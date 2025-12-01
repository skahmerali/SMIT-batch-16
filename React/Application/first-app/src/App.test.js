import { render, screen } from '@testing-library/react';
// import { screen } from '@testing-library/dom';
// import {preview} from 'jest-preview';
// import { screen } from '@testing-library/dom';
import App from './App';

test('renders hello in the screen', async () => {
  render(<App />);
  // await screen.debug();
  const linkElement = screen.getByText(/hello/i);
  expect(linkElement).toBeInTheDocument();
});

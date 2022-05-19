import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import App from './App';

describe('App', () => {
  it('Title should appear on page', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    screen.getByText(/guestbook/i);
  });
});

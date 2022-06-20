import { findByLabelText, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import userEvent from '@testing-library/user-event';
import { v4 as uuid } from 'uuid';

import App from './App';

describe('App', () => {
  it('Test app functionality', async () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <App />
        </UserProvider>
      </MemoryRouter>
    );
    const testerId = uuid();
    const user = {
      id: testerId,
      email: `tester@test.com`,
      password: '123456',
    };
    screen.getByText(/guestbook/i);
    const emailField = screen.getByLabelText('Email');
    const passwordField = screen.getByLabelText('Password');

    // User logs in
    userEvent.type(emailField, user.email);
    userEvent.type(passwordField, user.password);
    userEvent.click(screen.getByRole('button'));
    const guestbookInput = await screen.findByPlaceholderText(
      'Sign guestbook here'
    );

    // User signs guestbook
    const uniqueSignature = uuid();
    userEvent.type(guestbookInput, uniqueSignature);
    userEvent.click(
      screen.getByRole('button', {
        name: /add entry/i,
      })
    );
    // const currentTime = new Date().toLocaleString('en-US');
    const testEntry = await screen.findByText(uniqueSignature);
    // const testEntryTime = await screen.findByText(currentTime);
    expect(testEntry).toBeInTheDocument();

    userEvent.click(
      screen.getByRole('button', {
        name: /logout/i,
      })
    );
    await screen.findByLabelText('Password');
  });
});

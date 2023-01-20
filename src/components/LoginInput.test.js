/**
 * skenario testing
 *
 * - LoginInput component
 *   - should handle username typing correctly
 *   - should handle password typing correctly
 *   - should call login function when login button is clicked
 */
import React from 'react';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import LoginInput from './LoginInput';

describe('LoginInput component', () => {
  it('should handle username typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const usernameInput = await screen.getByPlaceholderText('Username');
    await userEvent.type(usernameInput, 'paijo');
    expect(usernameInput).toHaveValue('paijo');
  });

  it('should handle password typing correctly', async () => {
    render(<LoginInput login={() => {}} />);
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12345');
    expect(passwordInput).toHaveValue('12345');
  });

  it('should call login function when login button is clicked', async () => {
    const mockLogin = jest.fn();
    render(<LoginInput login={mockLogin} />);
    const usernameInput = await screen.getByPlaceholderText('Username');
    await userEvent.type(usernameInput, 'paijo');
    const passwordInput = await screen.getByPlaceholderText('Password');
    await userEvent.type(passwordInput, '12345');
    const loginButton = await screen.getByRole('button', { name: 'Login' });
    await userEvent.click(loginButton);
    expect(mockLogin).toBeCalledWith({ id: 'paijo', password: '12345' });
  });
});

import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import ContactForm from './ContactForm';

// Helper to assert default idle state
const assertIdleState = () => {
  expect(screen.getByRole('heading', { name: /send a message/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/message/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /send message/i })).toBeInTheDocument();
  expect(screen.queryByText(/message sent!/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/something went wrong/i)).not.toBeInTheDocument();
};

describe('ContactForm', () => {
  const originalFetch = global.fetch;

  beforeEach(() => {
    // Reset global.fetch before each test to ensure clean state
    global.fetch = vi.fn();
  });

  afterEach(() => {
    // Restore global.fetch to its original state after tests
    global.fetch = originalFetch;
    vi.restoreAllMocks();
  });

  it('renders correctly in the default idle state', () => {
    render(<ContactForm />);
    assertIdleState();
  });

  it('handles successful form submission', async () => {
    // Mock a successful fetch response
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ success: true }),
    });

    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello world!');

    // Submit the form
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for the success state to appear
    await waitFor(() => {
      expect(screen.getByText(/message sent!/i)).toBeInTheDocument();
    });

    // Ensure the form payload was correct
    expect(global.fetch).toHaveBeenCalledWith('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'John Doe',
        email: 'john@example.com',
        message: 'Hello world!',
      }),
    });

    // Verify "Send another" button resets form
    await user.click(screen.getByRole('button', { name: /send another/i }));
    assertIdleState();

    // Form fields should be cleared after success
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
    expect(screen.getByLabelText(/email/i)).toHaveValue('');
    expect(screen.getByLabelText(/message/i)).toHaveValue('');
  });

  it('handles failed form submission (API error)', async () => {
    // Mock a failed fetch response
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
    });

    render(<ContactForm />);
    const user = userEvent.setup();

    // Fill out the form
    await user.type(screen.getByLabelText(/name/i), 'Jane Doe');
    await user.type(screen.getByLabelText(/email/i), 'jane@example.com');
    await user.type(screen.getByLabelText(/message/i), 'This will fail.');

    // Submit the form
    await user.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for the error message to appear
    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });

    // The form should still be visible and keep its values
    expect(screen.getByLabelText(/name/i)).toHaveValue('Jane Doe');
  });

  it('handles failed form submission (network error)', async () => {
    // Mock a fetch that throws an error (e.g., network failure)
    global.fetch = vi.fn().mockRejectedValue(new Error('Network error'));

    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i), 'Jack');
    await user.type(screen.getByLabelText(/email/i), 'jack@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Testing network error.');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => {
      expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
    });
  });

  it('disables the submit button while loading', async () => {
    // Mock a fetch that never resolves to simulate loading
    global.fetch = vi.fn().mockImplementation(() => new Promise(() => {}));

    render(<ContactForm />);
    const user = userEvent.setup();

    await user.type(screen.getByLabelText(/name/i), 'John Doe');
    await user.type(screen.getByLabelText(/email/i), 'john@example.com');
    await user.type(screen.getByLabelText(/message/i), 'Hello world!');

    await user.click(screen.getByRole('button', { name: /send message/i }));

    expect(screen.getByRole('button', { name: /sending…/i })).toBeDisabled();
  });
});

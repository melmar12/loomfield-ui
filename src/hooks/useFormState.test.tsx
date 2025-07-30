/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, it, expect, vi } from 'vitest';

// Mock the validation utility to focus on testing
// form submission logic without worrying about validation errors
vi.mock('@/utils/validation', () => ({
  validateForm: () => ({}), // always returns no errors
}));

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useFormState } from './useFormState';

// Dummy component using the hook
const TestComponent = () => {
  const { handleSubmit, submitted, loading } = useFormState();

  return (
    <div>
      <button onClick={(e) => handleSubmit(e as any)}>Submit</button>
      {loading && <p>Loading...</p>}
      {submitted && <h2>form submitted successfully</h2>}
    </div>
  );
};

describe('useFormState (with mocked validation)', () => {
  it('submits successfully and sets submitted=true', async () => {
    render(<TestComponent />);
    fireEvent.click(screen.getByText('Submit'));

    // Wait for async fake API delay to resolve
    await waitFor(() =>
      expect(
        screen.getByText(/submitted/i)
      ).toBeInTheDocument(),
      { timeout: 2000 }
    );
  });
});

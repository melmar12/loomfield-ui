import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Select } from './Select';

describe('Select', () => {
  it('renders options and changes value', () => {
    const handleChange = vi.fn();

    render(
      <Select
        label="Role"
        name="role"
        value=""
        onChange={handleChange}
        options={[
          { value: 'admin', label: 'Admin' },
          { value: 'user', label: 'User' },
        ]}
      />
    );

    expect(screen.getByLabelText(/role/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/role/i), {
      target: { value: 'user' },
    });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error message', () => {
    render(
      <Select
        label="Role"
        name="role"
        value=""
        onChange={() => {}}
        options={[]}
        error="Role is required"
      />
    );

    expect(screen.getByText(/role is required/i)).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TextArea } from './TextArea';

describe('TextArea', () => {
  it('renders and updates value', () => {
    const handleChange = vi.fn();

    render(
      <TextArea
        label="Description"
        name="description"
        value=""
        onChange={handleChange}
        placeholder="Enter description"
      />
    );

    const textarea = screen.getByPlaceholderText(/enter description/i);
    fireEvent.change(textarea, { target: { value: 'Hello world' } });

    expect(handleChange).toHaveBeenCalled();
  });

  it('displays error message', () => {
    render(
      <TextArea
        label="Description"
        name="description"
        value=""
        onChange={() => {}}
        error="Description required"
      />
    );

    expect(screen.getByText(/description required/i)).toBeInTheDocument();
  });
});

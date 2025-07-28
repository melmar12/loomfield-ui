import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { TextInput } from './TextInput';

describe('TextInput', () => {
  it('renders with label and updates value on change', () => {
    const handleChange = vi.fn();

    render(
      <TextInput
        label="Name"
        name="name"
        value=""
        onChange={handleChange}
        placeholder="Enter your name"
      />
    );

    // Check that the label renders
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();

    // Simulate user typing
    fireEvent.change(screen.getByPlaceholderText(/enter your name/i), {
      target: { value: 'Melissa' },
    });

    // Assert onChange was called
    expect(handleChange).toHaveBeenCalled();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { NumberInput } from './NumberInput';

describe('NumberInput', () => {
  it('renders with label and updates value', () => {
    const handleChange = vi.fn();

    render(
      <NumberInput
        label="Age"
        name="age"
        value={25}
        onChange={handleChange}
        min={0}
        max={120}
      />
    );

    const input = screen.getByLabelText(/age/i);
    expect(input).toBeInTheDocument();

    fireEvent.change(input, { target: { value: '30' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error message when provided', () => {
    render(
      <NumberInput
        label="Age"
        name="age"
        value={-1}
        onChange={() => {}}
        error="Age cannot be negative"
      />
    );

    expect(screen.getByText(/age cannot be negative/i)).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Checkbox } from './Checkbox';

describe('Checkbox', () => {
  it('renders and toggles checked state', () => {
    const handleChange = vi.fn();

    render(
      <Checkbox
        label="Agree to Terms"
        name="agreeToTerms"
        checked={false}
        onChange={handleChange}
      />
    );

    const checkbox = screen.getByLabelText(/agree to terms/i);
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalled();
  });

  it('applies disabled state', () => {
    render(
      <Checkbox
        label="Agree to Terms"
        name="agreeToTerms"
        checked={false}
        onChange={() => {}}
        disabled
      />
    );

    const checkbox = screen.getByLabelText(/agree to terms/i);
    expect(checkbox).toBeDisabled();
  });
});

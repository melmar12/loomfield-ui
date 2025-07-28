import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { RadioGroup } from './RadioGroup';

describe('RadioGroup', () => {
  it('renders options and handles change', () => {
    const handleChange = vi.fn();

    render(
      <RadioGroup
        label="Priority"
        name="priority"
        value="low"
        onChange={handleChange}
        options={[
          { value: 'low', label: 'Low' },
          { value: 'high', label: 'High' },
        ]}
      />
    );

    const highOption = screen.getByLabelText(/high/i);
    fireEvent.click(highOption);

    expect(handleChange).toHaveBeenCalled();
  });

  it('shows error message', () => {
    render(
      <RadioGroup
        label="Priority"
        name="priority"
        value=""
        onChange={() => {}}
        options={[]}
        error="Priority is required"
      />
    );

    expect(screen.getByText(/priority is required/i)).toBeInTheDocument();
  });
});

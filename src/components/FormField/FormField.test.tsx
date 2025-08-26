// src/components/FormField/FormField.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { FormField } from './FormField';

describe('FormField', () => {
  it('renders children without error', () => {
    render(
      <FormField name="test">
        <input type="text" name="test" />
      </FormField>
    );

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.queryByText(/required/i)).not.toBeInTheDocument();
  });

  it('renders error message when provided', () => {
    render(
      <FormField name="email" error="This field is required">
        <input type="text" name="email" />
      </FormField>
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });
});

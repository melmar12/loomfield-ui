import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from './Form';
import { describe, it, expect, vi } from 'vitest';
import type { FormData } from '@/types/FormTypes';
import type { Errors } from '@/utils/validation';

const defaultForm: FormData = {
  name: '',
  age: 0,
  role: '',
  priority: 'low',
  description: '',
  agreeToTerms: false,
};

describe('Form component', () => {
  it('renders all fields and calls onChange', () => {
    const handleChange = vi.fn();
    render(
      <Form
        form={defaultForm}
        errors={{} as Errors}
        onChange={handleChange}
        onSubmit={() => {}}
        loading={false}
        getFieldError={() => undefined}
      />
    );

    const nameInput = screen.getByLabelText(/name/i);
    fireEvent.change(nameInput, { target: { value: 'Alice', name: 'name' } });
    expect(handleChange).toHaveBeenCalled();
  });

  it('calls onSubmit when form is submitted', () => {
    const handleSubmit = vi.fn(e => e.preventDefault());
    render(
      <Form
        form={defaultForm}
        errors={{} as Errors}
        onChange={() => {}}
        onSubmit={handleSubmit}
        loading={false}
        getFieldError={() => undefined}
      />
    );

    const formElement = screen.getByTestId('form');
    fireEvent.submit(formElement);
    expect(handleSubmit).toHaveBeenCalled();
  });
});

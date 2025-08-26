import type { FormData } from '../types/FormTypes';

export type Errors = {
  name?: string;
  age?: string;
  role?: string;
  priority?: string;
  description?: string;
  agreeToTerms?: string;
};

export function validateForm(form: FormData): Errors {
  const errors: Errors = {};

  if (!form.name) errors.name = 'Name is required';
  if (form.age <= 0) errors.age = 'Please enter a valid age';
  if (!form.role) errors.role = 'Role is required';
  if (!form.priority) errors.priority = 'Priority is required';
  if (form.description.length < 10)
    errors.description = 'Description must be at least 10 characters';
  if (!form.agreeToTerms) errors.agreeToTerms = 'You must agree to terms';

  return errors;
}

export function validateField<K extends keyof FormData>(
  name: K,
  value: FormData[K]
): string | undefined {
  switch (name) {
    case 'name':
      return typeof value === 'string' && value.trim()
        ? undefined
        : 'Name is required';
    case 'age':
      return typeof value === 'number' && value > 0 && value <= 120
        ? undefined
        : 'Age must be between 1 and 120';
    case 'role':
      return value ? undefined : 'Role is required';
    case 'priority':
      return value ? undefined : 'Priority is required';
    case 'description':
      return typeof value === 'string' && value.length >= 10
        ? undefined
        : 'Description must be at least 10 characters';
    case 'agreeToTerms':
      return value ? undefined : 'You must agree to the terms';
    default:
      return undefined;
  }
}

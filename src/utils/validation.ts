import type { FormData } from "../types/FormTypes";

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

  if (!form.name) errors.name = "Name is required";
  if (form.age <= 0) errors.age = "Please enter a valid age";
  if (!form.role) errors.role = "Role is required";
  if (!form.priority) errors.priority = "Priority is required";
  if (form.description.length < 10) errors.description = "Description must be at least 10 characters";
  if (!form.agreeToTerms) errors.agreeToTerms = "You must agree to terms";

  return errors;
}

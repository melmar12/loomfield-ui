import React, { useState } from 'react';
import { validateField, validateForm } from '@/utils/validation';
import type { Errors } from '@/utils/validation';
import type { FormData } from '@/types/FormTypes';

export const useFormState = () => {
  const [form, setForm] = useState<FormData>({
    name: '',
    age: 0,
    role: '',
    priority: 'low',
    description: '',
    agreeToTerms: false,
  });

  // generic change handler that adapts based on input type
  const handleChange = (
    e: React.ChangeEvent<
      // eslint-disable-next-line no-undef
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const parsedValue =
      type === 'checkbox'
        ? // eslint-disable-next-line no-undef
          (e.target as HTMLInputElement).checked
        : type === 'number'
          ? Number(value)
          : value;

    setForm(prev => ({ ...prev, [name]: parsedValue }));

    const error = validateField(name as keyof FormData, parsedValue);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleBlur: React.FocusEventHandler<
    // eslint-disable-next-line no-undef
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  > = e => {
    const { name, value, type } = e.target;
    const key = name as keyof FormData;

    const parsed =
      type === 'checkbox'
        ? // eslint-disable-next-line no-undef
          (e.target as HTMLInputElement).checked
        : type === 'number'
          ? Number(value)
          : value;

    setTouched(prev => ({ ...prev, [key]: true }));
    const err = validateField(key, parsed);
    setErrors(prev => ({ ...prev, [key]: err }));
  };

  // Submit handler with fake API call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setSubmitAttempted(true);
    // mark all fields touched so subsequent typing shows/clears errors
    setTouched({
      name: true,
      age: true,
      role: true,
      priority: true,
      description: true,
      agreeToTerms: true,
    });

    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);

      // Simulate API delay
      // eslint-disable-next-line no-undef
      await new Promise(resolve => setTimeout(resolve, 1500));

      setLoading(false);
      setSubmitted(true);
    }
  };

  const getFieldError = (key: keyof FormData): string | undefined => {
    if (touched[key] || submitAttempted) {
      return validateField(key, form[key]);
    }
    return undefined;
  };

  // Reset form to allow filling again
  const reset = () => {
    setForm({
      name: '',
      age: 0,
      role: '',
      priority: 'low',
      description: '',
      agreeToTerms: false,
    });
    setErrors({});
    setTouched({});
    setSubmitAttempted(false);
    setSubmitted(false);
  };

  const isValid = Object.keys(validateForm(form)).length === 0;

  return {
    form,
    errors,
    submitted,
    loading,
    touched,
    isValid,
    handleChange,
    handleBlur,
    getFieldError,
    handleSubmit,
    reset,
  };
};

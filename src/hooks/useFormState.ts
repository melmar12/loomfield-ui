  
import React, { useState } from 'react';
import { validateForm } from '@/utils/validation';
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
    setForm(prev => ({
      ...prev,
      [name]:
        type === 'checkbox'
          // eslint-disable-next-line no-undef
          ? e.target instanceof HTMLInputElement
            ? e.target.checked
            : false
          : type === 'number'
            ? Number(value)
            : value,
    }));
  };

  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // Submit handler with fake API call
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

  // Reset form to allow filling again
  const reset = () => {
    setSubmitted(false);
    setForm({
      name: '',
      age: 0,
      role: '',
      priority: 'low',
      description: '',
      agreeToTerms: false,
    });
    setErrors({});
  };

  return { form, errors, submitted, loading, handleChange, handleSubmit, reset };
};
import React, { useState } from 'react';
import { validateField, validateForm } from '@/utils/validation';
import type { Errors } from '@/utils/validation';
import type { FormData } from '@/types/FormTypes';

// ---- constants & helpers -----------------------------------------------
const INITIAL_FORM: FormData = {
  name: '',
  age: 0,
  role: '',
  priority: 'low',
  description: '',
  agreeToTerms: false,
};

// eslint-disable-next-line no-undef
type FieldElm = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement;

function parseInputValue(el: FieldElm) {
  // eslint-disable-next-line no-undef
  if (el.type === 'checkbox') return (el as HTMLInputElement).checked;
  if (el.type === 'number') return Number(el.value);
  return el.value;
}

// ---- hook ---------------------------------------------------------------
export const useFormState = () => {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<
    Partial<Record<keyof FormData, boolean>>
  >({});
  const [submitted, setSubmitted] = useState(false);
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [loading, setLoading] = useState(false);

  // derived: validate whole form only when form changes
  const isValid = Object.keys(validateForm(form)).length === 0;

  const handleChange = (e: React.ChangeEvent<FieldElm>) => {
    const { name } = e.target;
    const key = name as keyof FormData;
    const value = parseInputValue(e.target);

    setForm(prev => ({ ...prev, [key]: value }));

    const error = validateField(key, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleBlur: React.FocusEventHandler<FieldElm> = e => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitAttempted(true);

    // mark all fields touched
    setTouched({
      name: true,
      age: true,
      role: true,
      priority: true,
      description: true,
      agreeToTerms: true,
    });

    // validate full form
    const newErrors = validateForm(form);
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      // eslint-disable-next-line no-undef
      await new Promise(resolve => setTimeout(resolve, 1500)); // simulate API delay
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
    setForm(INITIAL_FORM);
    setErrors({});
    setTouched({});
    setSubmitAttempted(false);
    setSubmitted(false);
  };

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

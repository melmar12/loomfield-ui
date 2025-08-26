import React from 'react';

/**
 * FormField component for Loomfield
 * Wraps form inputs with a label and error message.
 * Tailwind styled. Accessible.
 */

type FormFieldProps = {
  label?: string;
  name: string;
  error?: string;
  children: React.ReactNode;
};

export const FormField = ({ label, name, error, children }: FormFieldProps) => {
  const describedBy = error ? `${name}-error` : undefined;

  return (
    <div className="mb-5">
      <label htmlFor={name} className="mb-1 block font-medium">
        {label}
      </label>
      <div
        aria-describedby={describedBy}
        aria-invalid={!!error}
        className="relative"
      >
        {children}
      </div>
      {error && (
        <p id={`${name}-error`} className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};

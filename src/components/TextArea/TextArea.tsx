import React from 'react';

/**
 * TextArea component for Loomfield
 * Supports label, name, value, onChange handler, placeholder, rows, and error message.
 * Tailwind styled. Controlled component.
 */

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  rows?: number;
  error?: string;
};

export const TextArea = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  rows = 3,
  error,
}: Props) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="mb-1 block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <textarea
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

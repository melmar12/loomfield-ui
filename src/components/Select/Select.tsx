import React from 'react';

/**
 * Select component for selecting options from a dropdown list.
 * Supports label, name, value, onChange handler, options array, and error message.
 * Tailwind styled. Controlled component.
 */

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: Option[];
  error?: string;
};

export const Select = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: Props) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="mb-1 block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <select
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    >
      <option value="" disabled>
        Select an option
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

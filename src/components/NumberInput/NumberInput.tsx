import React from 'react';

/**
 * NumberInput component that supports label, value, onChange, min/max, and error message.
 * Tailwind styled. Controlled component.
 */

type Props = {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
  error?: string;
};

export const NumberInput = ({
  label,
  name,
  value,
  onChange,
  min,
  max,
  error,
}: Props) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type="number"
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

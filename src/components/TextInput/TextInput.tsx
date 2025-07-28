import React from 'react';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
};

export const TextInput = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  error,
}: Props) => (
  <div className="mb-4">
    <label
      htmlFor={name}
      className="mb-1 block text-sm font-medium text-gray-700"
    >
      {label}
    </label>
    <input
      id={name}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        error ? 'border-red-500' : 'border-gray-300'
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

import React from 'react';

/**
 * RadioGroup component for selecting one option from a set of radio buttons.
 * Supports label, name, value, onChange handler, options array, and error message.
 * Tailwind sty led. Controlled component.
 */

type Option = {
  value: string;
  label: string;
};

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  options: Option[];
  error?: string;
};

export const RadioGroup = ({
  label,
  name,
  value,
  onChange,
  options,
  error,
}: Props) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <div className="flex flex-col space-y-2">
      {options.map(option => (
        <div key={option.value} className="flex items-center">
          <input
            id={`${name}-${option.value}`}
            name={name}
            type="radio"
            value={option.value}
            checked={value === option.value}
            onChange={onChange}
            className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
              error ? 'border-red-500' : ''
            }`}
          />
          <label
            htmlFor={`${name}-${option.value}`}
            className="ml-2 block text-sm text-gray-700"
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
    {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);

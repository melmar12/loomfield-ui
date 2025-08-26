import React from 'react';
import { FormField } from '@FormField';

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
  // eslint-disable-next-line no-undef
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  // eslint-disable-next-line no-undef
  onBlur?: React.FocusEventHandler<HTMLSelectElement>;
  options: Option[];
  error?: string;
};

export const Select = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  options,
  error,
}: Props) => (
  <div className="mb-4">
    <FormField label={label} name={name} error={error}>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
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
    </FormField>
  </div>
);

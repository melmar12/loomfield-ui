import React from 'react';
import { FormField } from '@FormField';

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
  // eslint-disable-next-line no-undef
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
    <FormField label={label} name={name} error={error}>
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
              className={`size-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 ${
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
    </FormField>
  </div>
);

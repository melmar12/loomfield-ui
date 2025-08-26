/* eslint-disable no-undef */
import React from 'react';
import { FormField } from '@FormField';

/**
 * NumberInput component that supports label, value, onChange, min/max, and error message.
 * Tailwind styled. Controlled component.
 */

type Props = {
  label: string;
  name: string;
  value: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  error?: string;
};

export const NumberInput = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  min,
  max,
  error,
}: Props) => (
  <div className="mb-4">
    <FormField label={label} name={name} error={error}>
      <input
        id={name}
        name={name}
        type="number"
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        min={min}
        max={max}
        className={`w-full rounded-md border px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
    </FormField>
  </div>
);

import React from 'react';
import { FormField } from '@FormField';

/**
 * TextArea component for Loomfield
 * Supports label, name, value, onChange handler, placeholder, rows, and error message.
 * Tailwind styled. Controlled component.
 */

type Props = {
  label: string;
  name: string;
  value: string;
  // eslint-disable-next-line no-undef
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
    <FormField label={label} name={name} error={error}>
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
    </FormField>
  </div>
);

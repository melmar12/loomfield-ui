import React from 'react';
import { FormField } from '@FormField';

type Props = {
  label: string;
  name: string;
  value: string;
  // eslint-disable-next-line no-undef
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
    <FormField label={label} name={name} error={error}>
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
    </FormField>
  </div>
);

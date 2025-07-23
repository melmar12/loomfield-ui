import React from 'react';

/**
 * Checkbox component for Loomfield
 * Supports label, name, checked state, onChange handler, and disabled state.
 * Tailwind styled. Controlled component.
 */

type Props = {
  label: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};  

export const Checkbox = ({ label, name, checked, onChange, disabled }: Props) => (
  <div className="mb-4 flex items-center">
    <input
      id={name}
      name={name}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      disabled={disabled}
      className={`h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded ${
        disabled ? 'cursor-not-allowed opacity-50' : ''
      }`}
    />
    <label htmlFor={name} className="ml-2 block text-sm text-gray-700">
      {label}
    </label>
  </div>
);
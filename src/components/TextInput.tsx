import React from 'react';

type Props = {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  error?: string;
};

export const TextInput = ({ label, name, value, onChange, placeholder, error }: Props) => (
  <div className="input-wrapper">
    <label htmlFor={name}>{label}</label>
    <input
      id={name}
      name={name}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
    {error && <span className="error">{error}</span>}
  </div>
);

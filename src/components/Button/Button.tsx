import React from 'react';
import { Spinner } from  '@Spinner';

/**
 * Button component with loading state and different styles.
 * Supports children, onClick handler, type, loading state, disabled state, and variant.
 * Tailwind styled. Controlled component.
 */

type ButtonProps = {
  children: React.ReactNode;
  // eslint-disable-next-line no-undef
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
};

export const Button = ({
  children,
  onClick,
  type = 'button',
  loading = false,
  disabled = false,
  variant = 'primary',
}: ButtonProps) => {
  const baseStyles =
    'w-full py-2 px-4 rounded flex items-center justify-center transition-colors';

  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-blue-300',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800 disabled:bg-gray-200',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {loading ? <Spinner size={20} /> : children}
    </button>
  );
};

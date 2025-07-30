import { render, screen, fireEvent } from '@testing-library/react';
import { SuccessScreen } from './SuccessScreen';
import { describe, it, expect, vi } from 'vitest';
import type { FormData } from '@/types/FormTypes';

const sampleData: FormData = {
  name: 'Alice',
  age: 25,
  role: 'admin',
  priority: 'high',
  description: 'Test description',
  agreeToTerms: true,
};

describe('SuccessScreen', () => {
  it('renders submitted data', () => {
    render(<SuccessScreen form={sampleData} onReset={() => {}} />);
    expect(screen.getByText(/form submitted successfully/i)).toBeInTheDocument();
    expect(screen.getByText(/alice/i)).toBeInTheDocument();
  });

  it('calls onReset when button is clicked', () => {
    const handleReset = vi.fn();
    render(<SuccessScreen form={sampleData} onReset={handleReset} />);
    fireEvent.click(screen.getByRole('button', { name: /fill out again/i }));
    expect(handleReset).toHaveBeenCalled();
  });
});

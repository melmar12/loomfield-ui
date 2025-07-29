import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { Button } from './Button';

describe('Button', () => {
  it('renders children and handles click', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    const btn = screen.getByRole('button', { name: /click me/i });
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });

  it('shows spinner when loading', () => {
    render(<Button loading>Loading</Button>);
    expect(screen.getByRole('button').querySelector('svg')).toBeInTheDocument();
  });
});

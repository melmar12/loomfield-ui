import { render } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { Spinner } from './Spinner';

describe('Spinner', () => {
  it('renders without crashing', () => {
    const { container } = render(<Spinner />);
    expect(container.querySelector('svg')).toBeInTheDocument();
  });
});

import { Button } from '@/button';
import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  it('renders the text correctly', () => {
    const text = 'Test Text';
    const { getByRole } = render(<Button>{text}</Button>);
    expect(getByRole('button')).toHaveTextContent(text);
  });
});

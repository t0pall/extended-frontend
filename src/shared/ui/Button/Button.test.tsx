import { render, screen } from '@testing-library/react';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

describe('Button', () => {
  const text = 'test text';
  test('Rendering', () => {
    render(<Button type="button">{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Rendering with clear theme', () => {
    render(
      <Button theme={ThemeButton.CLEAR} type="button">
        {text}
      </Button>,
    );
    expect(screen.getByText(text)).toHaveClass('clear');
  });
});

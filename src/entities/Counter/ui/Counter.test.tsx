import RenderComponent from 'helpers/renderWithTranslation/RenderComponent';
import { fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter', () => {
  test('should render', () => {
    RenderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    expect(screen.getByTestId('counter-value')).toHaveTextContent('10');
  });

  test('should increment', () => {
    RenderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId('counter-increment-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('11');
  });

  test('should decrement', () => {
    RenderComponent(<Counter />, {
      initialState: {
        counter: {
          value: 10,
        },
      },
    });
    fireEvent.click(screen.getByTestId('counter-decrement-button'));
    expect(screen.getByTestId('counter-value')).toHaveTextContent('9');
  });
});

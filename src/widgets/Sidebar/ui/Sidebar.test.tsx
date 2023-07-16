import { fireEvent, screen } from '@testing-library/react';
import renderWithTranslation from 'helpers/renderWithTranslation/renderWithTranslation';
import Sidebar from 'widgets/Sidebar/ui/Sidebar';

describe('Sidebar', () => {
  test('Rendering', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar_toggle');
    const sidebar = screen.queryByTestId('sidebar');
    expect(sidebar).not.toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});

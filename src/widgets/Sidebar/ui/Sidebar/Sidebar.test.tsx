import { fireEvent, screen } from '@testing-library/react';
import RenderComponent from 'helpers/renderWithTranslation/RenderComponent';
import Sidebar from 'widgets/Sidebar/ui/Sidebar/Sidebar';

describe('Sidebar', () => {
  test('Rendering', () => {
    RenderComponent(<Sidebar />);
    expect(screen.queryByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle', () => {
    RenderComponent(<Sidebar />);
    const toggleButton = screen.getByTestId('sidebar_toggle');
    const sidebar = screen.queryByTestId('sidebar');
    expect(sidebar).not.toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).toHaveClass('collapsed');
    fireEvent.click(toggleButton);
    expect(sidebar).not.toHaveClass('collapsed');
  });
});

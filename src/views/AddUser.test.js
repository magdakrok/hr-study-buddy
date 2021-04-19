import React from 'react';
import AddUser from './AddUser';
import { screen, fireEvent, render } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithThemeProviders';
import Dashboard from './Dashboard';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(
      <>
        <AddUser />
        <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), {
      target: { value: 'Grażyna' },
    });
    fireEvent.change(screen.getByTestId('Attendance'), {
      target: { value: '55%' },
    });
    fireEvent.change(screen.getByTestId('Average'), {
      target: { value: '4.5' },
    });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Grażyna');
  });
});

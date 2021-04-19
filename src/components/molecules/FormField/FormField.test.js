import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithThemeProviders';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});

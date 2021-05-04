import React from 'react';
import { screen } from '@testing-library/react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { renderWithProviders } from 'helpers/renderWithThemeProviders';
import NewsSection from './NewsSection';

const mock = new MockAdapter(axios);
const query = `
{
  allArticles{
    id
    title
    category
    content
    image{
      url
    }
  }
}
`;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });
  it('displays error when the articles are not loaded correctly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsSection />);
    await screen.findByText(/Sorry/);
  });

  it('Displays the articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: 'Test', category: 'Test', content: 'Test' },
        ],
      },
    });
    renderWithProviders(<NewsSection />);
    await screen.findAllByText(`Test`);
  });

  it('Displays text Loading at the time when articles are loading', () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [
          { id: 1, title: 'Test', category: 'Test', content: 'Test' },
        ],
      },
    });
    renderWithProviders(<NewsSection />);
    screen.findByText(/Loading.../);
  });
});

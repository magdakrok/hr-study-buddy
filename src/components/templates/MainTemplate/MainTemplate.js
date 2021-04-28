import Navigation from 'components/organisms/Navigation/Navigation';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsSection from 'components/templates/NewsSection/NewsSection';

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      {children}
      <NewsSection />
    </Wrapper>
  );
};

export default MainTemplate;

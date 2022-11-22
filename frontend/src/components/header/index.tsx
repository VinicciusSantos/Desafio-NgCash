import React from 'react';

import { Container } from './styles';

export interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
};

export default Header;

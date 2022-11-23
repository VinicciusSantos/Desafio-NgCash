import React from 'react';

import { Container, Title, Description } from './styles';

export interface BalanceCardProps {
    balance?: number;
  }

const BalanceCard: React.FC<BalanceCardProps> = (props) => {
  return (
    <Container>
        <Title>Balance</Title>
        <Description>R${ props.balance },00</Description>
    </Container>
  );
}

export default BalanceCard;
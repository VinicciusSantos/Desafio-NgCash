import React from 'react';

import { Container, Title, Description } from './styles';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

export interface BalanceCardProps {
  balance?: number;
}

const BalanceCard: React.FC<BalanceCardProps> = (props) => {
  return (
    <Container>
      <Title>
        <AccountBalanceWalletIcon/>
        <h2>Balance</h2>
      </Title>
      <Description>R${props.balance},00</Description>
    </Container>
  );
};

export default BalanceCard;

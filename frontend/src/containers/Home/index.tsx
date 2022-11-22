import React, { useEffect, useState } from 'react';

import { Container } from './styles';

import Header from '../../components/header';
import api from '../../api';

export interface Account {
    id: number;
    balance: number;
}

export interface Transactions {
    cashIn: any[];
    cashOut: any[];
}

export interface User {
    id: number;
    username: string;
}

export interface RootObject {
    message: string;
    account: Account;
    transactions: Transactions;
    user: User;
}

const Home: React.FC = () => {
  const [userData, setUserData] = useState<RootObject>();

  useEffect(() => {
    api.get('/account').then((res) => setUserData(res.data));
  }, []);

  return (
    <Container>
      <Header title="WELCOME" />
      {userData?.transactions.cashIn.map((chashIn) => <p>{chashIn}</p>)}
      {userData?.transactions.cashOut.map((chashOut) => <p>{chashOut}</p>)}
      {userData?.account.balance}
      {userData?.user.username}
      {userData?.user.id}
    </Container>
  );
};

export default Home;

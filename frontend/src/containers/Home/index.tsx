import React, { useState } from 'react';

import { Container } from './styles';

import Header from '../../components/header';
import api from '../../api';
import { RootObject } from '../../interfaces/accounts-interface';
import BalanceCard from '../../components/balance-card';

const Home: React.FC = () => {
  const [userData, setUserData] = useState<RootObject>();

  const getUserData = async () => {
    api.get('/account').then((res) => setUserData(res.data));
  }
  if (!userData) getUserData()

  return ( userData ?
    <Container>
      <Header title={`Ng Challenge`}/>
      <BalanceCard balance={userData?.account.balance}></BalanceCard>
      {userData.transactions.cashIn.map((chashIn) => <p>{chashIn}</p>)}
      {userData.transactions.cashOut.map((chashOut) => <p>{chashOut}</p>)}
    </Container>
    : <></>
  );
};

export default Home;

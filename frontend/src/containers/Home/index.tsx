import React, { useState } from 'react';

import { Container, Main } from './styles';

import Header from '../../components/header';
import api from '../../api';
import { RootObject } from '../../interfaces/accounts-interface';
import BalanceCard from '../../components/balance-card';
import TransferenceTable from '../../components/transference-table';

const Home: React.FC = () => {
  const [userData, setUserData] = useState<RootObject>();

  const getUserData = async () => {
    api.get('/account').then((res) => setUserData(res.data));
  };
  if (!userData) getUserData();

  return userData ? (
    <Container>
      <Header title={`Ng Challenge`} />
      <Main>
        <BalanceCard balance={userData?.account.balance}></BalanceCard>
        <TransferenceTable transactions={userData?.transactions}/>
      </Main>
    </Container>
  ) : (
    <></>
  );
};

export default Home;

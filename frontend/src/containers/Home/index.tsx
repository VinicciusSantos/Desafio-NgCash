import React, { useState } from 'react';

import { Container, Main } from './styles';

import Header from '../../components/header';
import api from '../../api';
import BalanceCard from '../../components/balance-card';
import TransferenceTable from '../../components/transference-table';
import { RootObject } from '../../interfaces/accounts-interface';

const Home: React.FC = () => {
  const [userData, setUserData] = useState<RootObject | any>();

  const getUserData = async (customRoute: string = '/account') => {
    if (customRoute === '') return filltWithNoTransactions()
    api.get(customRoute).then((res) => setUserData(res.data));
  };
  if (!userData) getUserData();

  const filltWithNoTransactions = () => {
    setUserData((previusValue: any) => {
      return {
        ...previusValue,
        transactions: []
      }
    })
  }

  return userData ? (
    <Container>
      <Header title={`Ng Challenge`} />
      <Main>
        <BalanceCard balance={userData?.user.account.balance}></BalanceCard>
        <TransferenceTable transactions={userData.transactions} update={getUserData}/>
      </Main>
    </Container>
  ) : (
    <></>
  );
};

export default Home;

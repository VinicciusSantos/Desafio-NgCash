import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Main } from './styles';

import Header from '../../components/header';
import api from '../../api';
import BalanceCard from '../../components/balance-card';
import TransferenceTable from '../../components/transference-table';
import { RootObject } from '../../interfaces/accounts-interface';

const Home: React.FC = () => {
  const [userData, setUserData] = useState<RootObject | any>();
  const [renderData, setRenderData] = useState<boolean>(false)
  const navigate = useNavigate()

  const getUserData = async (customRoute: string = '/account') => {
    if (customRoute === '') return filltWithNoTransactions()
    api
      .get(customRoute)
      .then((res: any) => {
        setUserData(res.data)
        setRenderData(true)
      })
      .catch((err: any) => { navigate('/login') });
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

  return renderData ?
    <Container>
      <Header title={`Ng Challenge`} />
      <Main>
        <BalanceCard balance={userData?.user.account.balance}></BalanceCard>
        <TransferenceTable transactions={userData.transactions} update={getUserData}/>
      </Main>
    </Container>
  :
    <Container style={{ justifyContent: "center" }}>
      <img src="../Syncronize.png" alt="syncronizing" />
    </Container>
};

export default Home;

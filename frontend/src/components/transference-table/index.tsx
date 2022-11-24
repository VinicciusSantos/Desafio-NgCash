import React from 'react';
import { Transaction } from '../../interfaces/accounts-interface';
import FilterButton from '../FilterButton';
import TransactionsModal from '../transactions-modal';

import {
  Container,
  Title,
  LeftSide,
  RightSide,
  TransactionsTable,
} from './styles';

export interface TransferenceTableProps {
  transactions: Transaction[];
  update: Function;
}

const TransferenceTable: React.FC<TransferenceTableProps> = (props) => {
  const getTransactionType = (transaction: Transaction): string => {
    if (transaction['creditedAccount']) return 'cashOut'
    return 'cashIn'
  }

  const getUsername = (transaction: Transaction): string => {
    if (transaction['creditedAccount']) return transaction.creditedAccount.username
    return transaction.debitedAccount.username
  }

  return (
    <Container>
      <Title>
        <LeftSide>
          <h2>Transaction History</h2>
        </LeftSide>
        <RightSide>
          <FilterButton></FilterButton>
          <TransactionsModal update={props.update}></TransactionsModal>
        </RightSide>
      </Title>

      <TransactionsTable>
        <thead>
          <tr>
            <th>Type</th>
            <th>Username</th>
            <th>Date</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {props.transactions.map((t: Transaction) => (
            <tr key={ t.id }>
              <td>{ getTransactionType(t) }</td>
              <td>{ getUsername(t) }</td>
              <td>{ new Date(t.createdAt).toUTCString() }</td>
              <td>R${ t.value }</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </Container>
  );
};

export default TransferenceTable;

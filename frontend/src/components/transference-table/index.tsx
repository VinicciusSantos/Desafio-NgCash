import React from 'react';
import { Transactions } from '../../interfaces/transactions-interface';

import {
  Container,
  Title,
  LeftSide,
  NewTrasactionButton,
  TransactionsTable,
} from './styles';

export interface TransferenceTableProps {
  transactions: Transactions;
}

const TransferenceTable: React.FC<TransferenceTableProps> = (props) => {
  const openModal = () => {
    console.log('oi');
  };

  return (
    <Container>
      <Title>
        <LeftSide>
          <h2>Transaction History</h2>
        </LeftSide>
        <NewTrasactionButton
          className="rainbow-background"
          onClick={() => openModal()}
        >
          New Trasaction
        </NewTrasactionButton>
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
          {props.transactions.cashIn.map((t) => (
            <tr key={ t.id }>
              <td>CashIn</td>
              <td>{ t.debitedAccountId.username }</td>
              <td>{ new Date(t.createdAt).toUTCString() }</td>
              <td>R${ t.value },00</td>
            </tr>
          ))}
          {props.transactions.cashOut.map((t) => (
            <tr key={ t.id }>
              <td>CashOut</td>
              <td>{ t.creditedAccountId.username }</td>
              <td>{ new Date(t.createdAt).toUTCString() }</td>
              <td>R${ t.value },00</td>
            </tr>
          ))}
        </tbody>
      </TransactionsTable>
    </Container>
  );
};

export default TransferenceTable;

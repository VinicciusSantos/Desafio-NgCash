import styled from 'styled-components';

export const Container = styled.div`
  width: 800px;
  padding: 20px;
  height: calc(95% - 40px);
  border-radius: 10px;
  background-color: white;
`;

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
`;

export const LeftSide = styled.div`
    display: flex;
`;

export const RightSide = styled.div`
    display: flex;
`;

export const TransactionsTable = styled.table`
    width: 100%;
    text-align: left;
    border-collapse: collapse;
    background-color: #eee;

    thead {
        background-color: white;
    }

    th, td {
        padding: 5px;
    }
`;

export const EmptyState = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
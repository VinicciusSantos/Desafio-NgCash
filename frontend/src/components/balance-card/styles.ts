import styled from 'styled-components';

export const Container = styled.div`
  height: min-content;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
`;

export const Title = styled.div`
    display: flex;
    align-items: center;

    h2 {
        margin-left: 5px;
    }
`;

export const Description = styled.span`
    font-size: 20px;
`;
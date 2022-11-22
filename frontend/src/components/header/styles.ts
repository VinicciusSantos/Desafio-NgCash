import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 20vh;
  padding: 20px;
  background: linear-gradient(
    90deg,
    #f9d923,
    #00a19d,
    #0c87b7,
    #cb49ff,
    #ff6666,
    #f9d923
  );
  background-size: 400%;
  animation: glow 55s linear infinite;
  box-shadow: 2px 2px 2px #00000020;

  display: flex;
  flex-direction: column;
`;

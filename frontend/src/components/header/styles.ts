import styled from 'styled-components';

export const Container = styled.div`
  width: calc(100vw - 40px);
  padding: 20px;
  height: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  &:after {
    background-image: url('../public/assets/60-lines.png');
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    content: '';
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export const LeftSide = styled.div`
  display: flex;

  img {
    margin-right: 20px;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  padding: 10px;
  border-radius: 50%;
  border: none;
  z-index: 1;
  cursor: pointer;

  * {
    fill: white;
  }
`;

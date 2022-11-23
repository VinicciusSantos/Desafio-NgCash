import React from 'react';
import { useNavigate } from 'react-router-dom';
import ExitToAppTwoToneIcon from '@mui/icons-material/ExitToAppTwoTone';
import { Container, LeftSide, LogoutButton} from './styles';

export interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const navigate = useNavigate()
  const doLogout = () => {
    localStorage.removeItem('token');
    console.log('oi')
    navigate('/login')
  }

  return (
    <Container className='rainbow-background'>
      <LeftSide>
        <img src="../assets/ng-logo.png" width="50px" height="50px" alt="logo" />
        <h1>{ props.title }</h1>
      </LeftSide>

      <LogoutButton 
        onClick={() => doLogout()}
        title="logout">
        <ExitToAppTwoToneIcon/>
      </LogoutButton>
    </Container>
  );
};

export default Header;

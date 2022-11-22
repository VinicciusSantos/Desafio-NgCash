import TextField from '@mui/material/TextField';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
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
  animation: glow 25s linear infinite;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:after {
    background-image: url('../assets/swirl.png');
    position: absolute;
    top: 0;
    z-index: 0;
    content: '';
    width: 100%;
    height: 100%;
    opacity: .5;
  }
`;

export const FormContainer = styled.form`
  z-index: 1;
  background-color: #222;
  color: #eee;
  border-radius: 10px;
  padding: 10px;
  height: auto;
  padding: 25px 0;
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  width: 90%;
  margin: 5px 0 !important;

  .MuiInputBase-root {
      background-color: #1c1c1c !important;
  }

  * {
    border-color: #00000010 !important;
    color: #ccc !important;
  }
`;

export const SubmitButton = styled.button`
  border-color: transparent;
  border-radius: 5px;
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
  animation: glow 25s linear infinite;
  width: 90%;
  padding: 10px 0;
  margin-top: 10px;
  cursor: pointer;
`;

export const LoginRedirect = styled.div`
    font-size: 13px;
    width: 90%;
    margin-top: 8px;
    text-align: end;

    a {
        margin-left: 5px;
        text-decoration: none;
        color: #00a19d;
        transition-duration: .3s;
        
        &:hover {
            transition-duration: .3s;
            color: #00c990;
        }
    }
`;
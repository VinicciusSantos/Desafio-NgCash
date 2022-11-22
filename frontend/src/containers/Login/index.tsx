import React, { SyntheticEvent, useState } from 'react';
import api from '../../api';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import {
  Container,
  FormContainer,
  StyledTextField,
  SubmitButton,
  LoginRedirect,
} from './styles';

const Login: React.FC = () => {
  const [snackbarInfos, setSnackbarInfos] = useState({
    isOpen: false,
    message: '',
  });
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: any) => {
    setLoginData({
      ...loginData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    api
      .post('/auth/login', loginData)
      .then((res) => console.log(res))
      .catch((err) => {
        setSnackbarInfos({
          isOpen: true,
          message: err.response.data.error,
        });
      });
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarInfos({
      isOpen: false,
      message: '',
    });
  };

  return (
    <Container>
      <FormContainer>
        <h1>LOGIN</h1>
        <StyledTextField
          id="outlined-basic"
          name="username"
          label="Username"
          value={loginData.username}
          onChange={(e) => handleChange(e)}
          variant="outlined"
        />
        <StyledTextField
          id="outlined-basic"
          name="password"
          label="Password"
          value={loginData.password}
          onChange={(e) => handleChange(e)}
          variant="outlined"
        />
        <SubmitButton onClick={(e: any) => onSubmit(e)}>Login</SubmitButton>
        <LoginRedirect>
          Not a member?
          <a href="/login">Signup now</a>
        </LoginRedirect>
      </FormContainer>

      <Snackbar
        open={snackbarInfos.isOpen}
        autoHideDuration={4000}
        anchorOrigin={{ "horizontal": "left", "vertical": "top"}}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} variant="filled" severity="error" sx={{ width: '100%' }}>
          {snackbarInfos.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Login;

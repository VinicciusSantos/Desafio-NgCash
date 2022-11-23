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
import { Link, useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const navigate = useNavigate()

  const [snackbarInfos, setSnackbarInfos] = useState({
    isOpen: false,
    message: '',
    type: '',
    hideDuration: 3000
  });
  const [registerData, setRegisterData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (event: any) => {
    setRegisterData({
      ...registerData,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (e: Event) => {
    e.preventDefault();
    api
      .post('/auth/register', registerData)
      .then((res) => {
        setSnackbarInfos({
          isOpen: true,
          message: res.data.message + ' please, do login',
          type: 'sucess',
          hideDuration: 1500
        });
        setTimeout(() => navigate('/login'), 2000);
      })
      .catch((err) => {
        setSnackbarInfos({
          isOpen: true,
          message: err.response.data.error,
          type: 'error',
          hideDuration: 3000,
        });
      });
  };

  const handleClose = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarInfos({
      isOpen: false,
      message: '',
      type: 'error',
      hideDuration: 3000
    });
  };

  return (
    <Container>
      <FormContainer>
        <h1>REGISTRATION</h1>
        <StyledTextField
          id="outlined-basic"
          name="username"
          label="Username"
          value={registerData.username}
          onChange={(e) => handleChange(e)}
          variant="outlined"
        />
        <StyledTextField
          id="outlined-basic"
          name="password"
          label="Password"
          type="password"
          value={registerData.password}
          onChange={(e) => handleChange(e)}
          variant="outlined"
        />
        <SubmitButton onClick={(e: any) => onSubmit(e)}>Register</SubmitButton>
        <LoginRedirect>
          Already a member?
          <Link to="/login">Login here</Link>
        </LoginRedirect>
      </FormContainer>

      <Snackbar
        open={snackbarInfos.isOpen}
        autoHideDuration={snackbarInfos.hideDuration}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          variant="filled"
          severity={snackbarInfos.type === 'error' ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {snackbarInfos.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Register;

import React from 'react';

import { Container, FormContainer, StyledTextField, SubmitButton, LoginRedirect } from './styles';

const Register: React.FC = () => {
  return (
    <Container>
      <FormContainer>
        <h1>REGISTRATION</h1>
        <StyledTextField id="outlined-basic" label="Username" variant="outlined" />
        <StyledTextField id="outlined-basic" label="Password" variant="outlined" />
        <SubmitButton>Register</SubmitButton>
        <LoginRedirect>
          Already a member?
          <a href="/login">Login here</a>
        </LoginRedirect>
      </FormContainer>
    </Container>
  );
};

export default Register;

import React from 'react'
import {StyledButton} from './styles/ButtonLogin.styled';

function ButtonLogin({children, ...props}) {
  return (
    <StyledButton {...props}>
        {children}
    </StyledButton>
  );
}

export default ButtonLogin;
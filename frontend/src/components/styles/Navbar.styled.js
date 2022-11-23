import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
 
`
export const Hola = styled.h1`
 
  line-height: 10px;
  text-align: center;
  font-size: 21px;
  
  

`



export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`

export const Logo = styled.img`
  
  
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 1px;
  }
`

export const Image = styled.img`
  width: 600px;
  animation: 20s ;
`

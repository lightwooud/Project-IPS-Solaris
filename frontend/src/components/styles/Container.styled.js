import styled from 'styled-components'

export const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  animation: 20s;
  
  
`
export const Grid = styled.div`
  display: flex;
  align-content: center;
  flex-wrap: wrap;
  margin: 0%;
  
  
`
export const StyledHome = styled.header`
  background-color: ${({ theme }) => theme.colors.header};
 
`


export const Wrapper = styled.div`
  display: flex;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 2px;
 
`

export const ContainerServicios = styled.div`
  border-radius: 50px;
  
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  font-size: 16px;
  font-weight: 700;
  padding: 20px 50px;
  margin: 60px;
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
  align-items: center;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  } 

`
export const ContainerNoticias = styled.div`
  
  padding: 10px 40px;
  margin: 25px;
  
  align-items: center;



`
export const TituloServicios = styled.h1`
  text-align: center;
  font-size: 24px;

`
export const DescriptionServicios = styled.p`

  

`

export const ButtonServicios = styled.button`
  position: relative; 
  

  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  padding: 10px 10px;
 
  background-color: ${({ bg }) => bg || '#fff'};
  color: ${({ color }) => color || '#333'};
 

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }



`

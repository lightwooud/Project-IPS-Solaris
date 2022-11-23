import React from 'react'
import TablaOrdenes from './TablaOrdenes'
import {data} from './DataOrdenes'
import { Center , HeadTabla,StyledFormWrapper } from './styles/OrdenMedica.styled'
import { createGlobalStyle} from 'styled-components';


const GlobalStyle = createGlobalStyle`
  html {
    height: 100%
  }
  body {
    font-family: Arial, Helvetica, sans-serif;
    background: linear-gradient(to bottom, #ebfbff,#ebfbff);
    height: 100%;
    margin: 0;
    color: #555;
  }
`;

export default function OrdenMedica () {

 
  return (
    <>
      <GlobalStyle/>
      <StyledFormWrapper>
        <HeadTabla>
          <h2>Ordenes Medicas</h2>
          <Center V H>
            <TablaOrdenes data={data} />
          </Center>
        </HeadTabla>
      </StyledFormWrapper>
    </>
  );
}

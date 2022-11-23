import React from 'react'
import Noticias from './Noticias'

import { ContainerServicios, Grid,Wrapper,TituloServicios, ButtonServicios, DescriptionServicios,ContainerNoticias} from './styles/Container.styled'
import {Logo} from './styles/Navbar.styled'
import { NewContextProvider } from './NewContext'
export default function Home ()  {
  return (
    
    <>
  
        <TituloServicios>
            SERVICIOS DESTACADOS
        </TituloServicios>
        
        <Grid>

          <Wrapper>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                   ONCOLOGIA
                  <DescriptionServicios>medicina que estudia el cáncer.</DescriptionServicios>
                  <ButtonServicios>Ver mas</ButtonServicios>
              </ContainerServicios>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                  PEDIATRIA
                  <DescriptionServicios>atención médica de bebés</DescriptionServicios>
                  <ButtonServicios>Ver mas</ButtonServicios>
              </ContainerServicios>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                  PSICOLOGIA
                  <DescriptionServicios>Ciencia o estudio de la mente </DescriptionServicios>
                  <ButtonServicios>Ver mas</ButtonServicios>
              </ContainerServicios>
              <ContainerServicios>
                  <Logo src="./images/icon-citas.png" alt="my image" />
                  ODONTOLOGIA
                  <DescriptionServicios>tratamiento de los dientes</DescriptionServicios>
                  <ButtonServicios>Ver mas</ButtonServicios>
              </ContainerServicios>

          </Wrapper>
          
      </Grid>
    <ContainerNoticias>
            <NewContextProvider>
                <Noticias/> 
            </NewContextProvider>     
    </ContainerNoticias>
                   
       
</>

        

)
}


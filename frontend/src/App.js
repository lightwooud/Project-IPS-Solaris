import { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import React from 'react'
import Home from './components/Home'
import Formulario from './components/Formulario'
import { Flex } from './components/styles/Flex.styled'
import { ContainerBotones } from './components/styles/Button.styled'
import { Logo } from './components/styles/Navbar.styled'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from 'react-router-dom'
import OrdenMedica from './components/OrdenMedica'
import Autorizaciones from './components/Autorizaciones'
import Laboratorios from './components/Laboratorios'


const theme = {
  colors: {
    header: '#A3E4D7 ',
    body: '#ebfbff',
    footer: '#003333',
  },
  mobile: '768px',
}



  function App() {
    return (
      
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        
        <Header />
       
        <Router>
      
        <Container>
                <Flex> 
                <Link to='/'>
                    < ContainerBotones  >
                        <Logo src="./images/iconoHome.jpg" alt="my image"/>
                        <h4>INICIO</h4> 
                    </ContainerBotones>
                  </Link>
                  <Link to='/citas'>
                    < ContainerBotones  >
                        <Logo src="./images/icon-citas.png" alt="my image"/>
                        <h4>CITAS MEDICAS</h4>
                    </ContainerBotones>
                  </Link>
                  <Link to='/ordenes'>
                    <ContainerBotones >
                        <Logo src="./images/icon-ordenes.png" alt="my image"/>
                        <h4>ORDENES MEDICAS</h4> 
                    </ContainerBotones>
                  </Link>
                  <Link to='/autorizaciones'>
                    <ContainerBotones >
                        <Logo src="./images/icon-resultados.png" alt="my image"/>
                        <h4>RADICADOS</h4>
                    </ContainerBotones>
                  </Link>
                  <Link to= '/laboratorios'>
                    <ContainerBotones>
                        <Logo src="./images/icon-solicitud.png" alt="my image"/>
                        <h4>EXAMENES</h4> 
                    </ContainerBotones>
                  </Link>
              </Flex>
            </Container>
              
                  <Routes>
                    <Route exact path='/' element={<Home/>} />          
                  </Routes> 
                
                  <Routes>
                    <Route exact path='/citas'  element={<Formulario/>} />          
                  </Routes>
                  <Routes>
                    <Route exact path='/ordenes'  element={<OrdenMedica/>} />          
                  </Routes>
                  <Routes>
                    <Route exact path='/autorizaciones'  element={<Autorizaciones/>} />          
                  </Routes>
                  <Routes>
                    <Route exact path='/laboratorios'  element={<Laboratorios/>} />          
                  </Routes>
              <Footer /> 
          </Router>
             
    </ThemeProvider>
  )
}




export default App;

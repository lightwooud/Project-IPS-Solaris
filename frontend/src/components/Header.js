import React from 'react'
import { StyledHeader, Nav, Logo, Image, Hola} from './styles/Navbar.styled'
import { Button} from './styles/Button.styled'
import {Container} from './styles/Container.styled'
import Slider from 'react-styled-carousel';


import {
    BrowserRouter as Router,
    Link,
  }from 'react-router-dom'


    

export default function Header()  {
  return (
    
    <StyledHeader>
       <Router>
        <Container>
            <Nav>
                <Link to='/'>
                    <Logo src='../images/IPS.svg' alt='' />
                </Link>
             
                <Button>AFILIADOS</Button>
                <Button>EMPLEADORES</Button>
                <Button>PRESTADORES</Button>
                <Button>PRENSA</Button>
                
            </Nav>
        
            <Slider cardsToShow={1} pauseOnMouseOver={false} infinite={true}>
                <Hola ><Image src="./images/1.jpg" alt="doggo" /> 
                            </Hola>
                <Hola><Image src="./images/2.jpg" alt="doggo" />
                                  </Hola>
                <Hola><Image src="./images/3.jpg" alt="doggo" />
                                  </Hola>
                <Hola><Image src="./images/4.jpg" alt="doggo" />
                                </Hola>
               
            </Slider>   
           
                   
        </Container>
        </Router>
    </StyledHeader> 
    
  )
}


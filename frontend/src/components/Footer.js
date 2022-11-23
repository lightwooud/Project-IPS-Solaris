import React from "react";
import { FaInstagram, FaTwitter} from "react-icons/fa";
import { AiOutlineMail} from "react-icons/ai";
import { BsFillTelephoneFill} from "react-icons/bs";
import {RiHotelLine} from "react-icons/ri";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./styles/Footer.styled";
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: "black", 
                   textAlign: "center", 
                   }}>
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Sobre Nosotros</Heading>
            <FooterLink href="#">Mision</FooterLink>
            <FooterLink href="#">Vision</FooterLink>

          </Column>
          <Column>
            <Heading>Sedes</Heading>
            <FooterLink href="#"><RiHotelLine/>Bogotá</FooterLink>
            <FooterLink href="#"><RiHotelLine/>Neiva</FooterLink>
         
          </Column>
          <Column>
            <Heading>Contactanos</Heading>
            <FooterLink href="#">
              <AiOutlineMail/>IPSOLARIS@salud.com</FooterLink>
            <FooterLink href="#">
              <BsFillTelephoneFill/>+57 3214567895</FooterLink>

          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  <FaInstagram/>
                  Instagram
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>
                  <FaTwitter/>
                  Twitter
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;

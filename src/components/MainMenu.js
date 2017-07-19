import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'
import LogoImg from './img/LOGO_TITLE_HORIZONTAL.png';
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  MenuItem,
  NavItem,
  NavDropdown
} from 'react-bootstrap'

const MainMenu = (props) =>
  (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src={LogoImg} height={25}/></Link>
      </Navbar.Brand>
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      <LinkContainer to="/kalendarz">
        <NavItem>Twój Kalendarz Wydarzeń</NavItem>
      </LinkContainer>
      <LinkContainer to="/detale">
        <NavItem>Detale wydarzenia</NavItem>
      </LinkContainer>
      <LinkContainer to="/mapa">
        <NavItem>Sprawdź w Okolicy</NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Navbar>




)

export default MainMenu
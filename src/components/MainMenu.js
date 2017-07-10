import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'
import Img from 'react-image'
import LogoImg from './img/LOGO_TITLE_HORIZONTAL.png';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap'
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
    <Nav>
      <IndexLinkContainer to="/">
        <NavItem>Home</NavItem>
      </IndexLinkContainer>
      <LinkContainer to="/kategorie">
        <NavItem>Kategorie</NavItem>
      </LinkContainer>
      <LinkContainer to="/kalendarz">
        <NavItem>Twój kalendarz</NavItem>
      </LinkContainer>
      <LinkContainer to="/szukaj">
        <NavItem>Szukaj w pobliżu</NavItem>
      </LinkContainer>
      <LinkContainer to="/detale">
        <NavItem>Detale wydarzenia</NavItem>
      </LinkContainer>
      <LinkContainer to="/mapa">
        <NavItem>Mapa Google</NavItem>
      </LinkContainer>
      <NavDropdown eventKey={3} title="Konto" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Moje imprezy</MenuItem>
        <MenuItem eventKey={3.2}>Historia</MenuItem>
      </NavDropdown>
    </Nav>
  </Navbar>

)


export default MainMenu
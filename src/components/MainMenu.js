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

import FontAwesome from 'react-fontawesome'

const menuStyle = {
  color: 'white',
  padding: '0.2em',
};

const menuLogo = {
  height: '1.5em'
};

const loginMenu = {
  padding: '0.6em',
  height: '2.5em',
  fontSize: '12px',
};


const MainMenu = (props) =>
  (
  <Navbar>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src={LogoImg} style={menuLogo}/></Link>
      </Navbar.Brand>

    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      <LinkContainer to="/kalendarz" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-calendar-o" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/detale" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-info" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/mapa" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-street-view" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/mapa" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-sign-in" size='1x'/></NavItem>
      </LinkContainer>
      <Navbar.Text style={loginMenu}>
        Zalogowany jako: <Navbar.Link href="#">MKAPZ</Navbar.Link>
      </Navbar.Text>
      <LinkContainer to="/login" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-sign-in" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/signup" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-sign-out" size='1x'/></NavItem>
      </LinkContainer>

    </Nav>
  </Navbar.Collapse>
  </Navbar>

)

export default MainMenu
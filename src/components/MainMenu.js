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

import firebase from 'firebase'
import { connect } from 'react-redux'

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


const MainMenu = ({ user}) =>
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
        <NavItem><FontAwesome className="fa fa-map-o" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/signup" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-user-plus" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/signin" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-sign-in" size='1x'/></NavItem>
      </LinkContainer>
      <Navbar.Text style={loginMenu}>
        Zalogowany jako: <Navbar.Link href="#"></Navbar.Link>
      </Navbar.Text>
    </Nav>
  </Navbar.Collapse>
  </Navbar>

)

export default connect(
  state => ({
    user: state.auth.user
  })
)(MainMenu)
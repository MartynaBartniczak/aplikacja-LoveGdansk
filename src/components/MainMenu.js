import React from 'react'
import { Link } from 'react-router-dom'
import './MainMenu.css'
import LogoImg from './img/LOGO_TITLE_HORIZONTAL.png';
import { LinkContainer } from 'react-router-bootstrap'
import {
  Navbar,
  Nav,
  Button,
  NavItem,
} from 'react-bootstrap'

import firebase from 'firebase'
import { connect } from 'react-redux'

import FontAwesome from 'react-fontawesome'

const menuStyle = {
  color: 'white',
};

const menuLogo = {
  height: '1.2em'
};

const menuButtonSignOut = {
  marginTop: '0.8em',
  borderRadius: '30px'
};

const menuButtonSignIn = {
  marginTop: '0.8em',
  borderRadius: '30px'
};

const menuButtonSignUp = {
    marginTop: '0.8em',
    borderRadius: '30px',
    backgroundColor: '#E3B505',
    backgroundImage: 'linear-gradient(to bottom, #E3B505 100%, #E3B505 100%)',
};


const MainMenu = ({ user}) =>
  (
    <Navbar fixedTop>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/"><img src={LogoImg} style={menuLogo} alt="logo"/></Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
    <Nav pullRight>
      <LinkContainer to="/kalendarz" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-calendar-o" size='1x'/></NavItem>
      </LinkContainer>
      <LinkContainer to="/mapa" style={menuStyle}>
        <NavItem><FontAwesome className="fa fa-map-o" size='1x'/></NavItem>
      </LinkContainer>&nbsp;&nbsp;&nbsp;&nbsp;
        {user === null ?
          <Link to={'/signUp'}>
          <Button
            style = {menuButtonSignUp}
            bsStyle="warning"
            bsSize="small"
          >
            Zarejestruj się
          </Button>
          </Link>
          :''
          }
        &nbsp;&nbsp;&nbsp;&nbsp;
        {user === null ?
            <Link to={'/signIn'}>
                <Button
                    style = {menuButtonSignIn}
                    bsStyle="success"
                    bsSize="small"
                >
                    Zaloguj
                </Button>
            </Link>
            :
            <Button
                style = {menuButtonSignOut}
                bsStyle="danger"
                bsSize="small"
                onClick={() => firebase.auth().signOut()}>
                Wyloguj
            </Button>
        }

        </Nav>

  </Navbar.Collapse>
  </Navbar>

)

export default connect(
  state => ({
    user: state.auth.user
  })
)(MainMenu)
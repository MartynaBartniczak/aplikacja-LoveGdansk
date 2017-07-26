import React from 'react'
import firebase from 'firebase'
import {
  Grid,
  FormControl,
  Row,
  Form,
  Col,
  ControlLabel,
  Checkbox,
  FormGroup
}
  from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

const formText = {
  color: 'white'
};

const formTextPlaceholder = {
  textAlign: 'center'
};

const formButton = {
  textAlign: 'center',
  borderRadius: '30px',
};

const divStyle = {
  marginBottom: '2em',
  marginTop: '2em',
};

class SignInForm extends React.Component {
  state = {
    email: '',
    password: ''
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    })
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    firebase.auth().signInWithEmailAndPassword(
      this.state.email,
      this.state.password
    )
  }

  render() {
    return (
      <div

        style={divStyle}
      >
        <h3
          style={{color:'white'}}
        >
          ZALOGUJ SIĘ
        </h3>
        <FontAwesome
          className="fa fa-sign-in"
          size='5x'
          style={{marginTop:'0.4em', marginBottom: '0.5em'}}
        />
        <Row>
          <Grid>
      <Form onSubmit={this.handleSubmit}
      horizontal
      >
        Email:
            <Col sm={7}>
        <FormControl
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
          placeholder="e-mail"
          style={formTextPlaceholder}
        />
            </Col>
        Hasło:
        <Col sm={7}>
        <FormControl
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          placeholder="hasło"
          style={formTextPlaceholder}
        />
        </Col>
        <button>Sign In</button>
      </Form>
          </Grid>
        </Row>
      </div>
    )
  }
}

export default SignInForm
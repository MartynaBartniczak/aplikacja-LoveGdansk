import React from 'react'
import firebase from 'firebase'
import {Button,
        Grid,
        FormControl,
        Row,
Form, Col, ControlLabel, Checkbox, FormGroup}
  from 'react-bootstrap'
import {connect} from 'react-redux'
import { syncUser } from '../state/auth'
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


class SignUpForm extends React.Component {
  state = {
    email: '',
    password: '',
    message: null
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
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
      this.state.password
    ).then(
      user => {
        //console.log(user)
        user.updateProfile({
          displayName: 'Janusz Kowalski'
        }).then(
          () => this.props.syncUser({...user})
        )
      }
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
            ZAŁÓŻ KONTO
          </h3>
          <FontAwesome
            className="fa fa-user-plus"
            size='5x'
            style={{marginTop:'0.4em', marginBottom: '0.5em'}}
          />
          <Row>
            <Grid>
          <Form onSubmit={this.handleSubmit}
            horizontal
          >
            <p>{this.state.message}</p>
            <FormGroup controlId="formHorizontalEmail">
              <Col
                componentClass={ControlLabel}
                sm={3}
                style={formText}
              >
                Email:
              </Col>
              <Col sm={7}>
                <FormControl
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmailChange}
                  placeholder="e-mail"
                  style={formTextPlaceholder}
                />
              </Col>
            </FormGroup>

            <FormGroup controlId="formHorizontalPassword">
              <Col
                componentClass={ControlLabel}
                sm={3}
                style={formText}
              >
                Hasło:
              </Col>
              <Col sm={7}>
                <FormControl
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePasswordChange}
                  placeholder="hasło powinno zawierać: jedną wielką literę, jedną małą literę, jedną cyfrę, od 8 do 16 znaków."
                  style={formTextPlaceholder}
                />
              </Col>
            </FormGroup>

            <FormGroup>
              <Col
                smOffset={2}
                sm={7}
                style={formText}
              >
                <Checkbox>zapamiętaj mnie</Checkbox>
              </Col>
            </FormGroup>

            <FormGroup>
              <Col
                smOffset={2}
                sm={7}>
                <button
                  style={formButton}
                  bsStyle="success"
                  type="submit"
                >
                  Zakładam konto
                </button>
              </Col>
            </FormGroup>
          </Form>
        </Grid>
      </Row>
        </div>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    syncUser: (user) => dispatch(syncUser(user))
  })
)(SignUpForm)
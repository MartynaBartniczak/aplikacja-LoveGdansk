import React from 'react'
import firebase from 'firebase'
import {Button,
        Grid,
        FormControl,
        Row}
  from 'react-bootstrap'
import {connect} from 'react-redux'
import { syncUser } from '../state/auth'


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
      <div>
        <Row>
          <Grid>
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.message}</p>
        <FormControl
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
          placeholder="podaj swój login"
        /><br/>
        <FormControl
          type="password"
          value={this.state.password}
          onChange={this.handlePasswordChange}
          placeholder="podaj hasło"
        /><br/>
        <Button>Sign Up</Button><br/>
      </form><br/>
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
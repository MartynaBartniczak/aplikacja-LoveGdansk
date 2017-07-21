import React from 'react'
import firebase from 'firebase'
import {Button,
        InputGroup,
  FormControl,Row}
        from 'react-bootstrap'

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
      () => this.setState({ message: 'User created!' })
    ).catch(
      error => this.setState({ message: error.message })
    )
  }

  render() {
    return (
      <div>
        <Row>
      <form onSubmit={this.handleSubmit}>
        <p>{this.state.message}</p>
        <FormControl
          type="text"
          value={this.state.email}
          onChange={this.handleEmailChange}
        />
        <FormControl type="password"
          value={this.state.password}
               onChange={this.handlePasswordChange}
        />
        <Button>Sign Up</Button>
      </form>
        </Row>
      </div>
    )
  }
}

export default SignUpForm
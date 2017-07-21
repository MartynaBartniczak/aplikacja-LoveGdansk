import React from 'react'
import firebase from 'firebase'

class SignUpForm1 extends React.Component{

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
    firebase.auth().createUserWithEmailAndPassword(
      this.state.email,
    this.state.password)
  }

  render () {
  return (

  <form onSubmit={this.handleSubmit}>
    <input
      type ="text"
      value={this.state.email}
      onChange={this.handleEmailChange}
    />
    <input
      type ="password"
      value={this.state.password}
      onChange={this.handlePasswordChange}
    />
    <button>ZAPISZ SIĘ!</button>
    </form>
    )
}
}

export default SignUpForm1
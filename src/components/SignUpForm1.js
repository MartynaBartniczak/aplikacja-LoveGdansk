import React from 'react'

class SignUpForm1 extends React.Component{

  state = {
    email: '',
    password: ''
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
      }
    )
  }

  render () {
  return (

  <form>
    <input
      type ="text"
      value={this.state.email}
      onChange={this.handleEmailChange}
    />
    <input type ="password" />
    <button>SignUp</button>
    </form>
    )
}
}
import React from 'react'
import { connect } from 'react-redux'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'

const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <div>
      <SignInForm/>
      <SignUpForm/>
    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)
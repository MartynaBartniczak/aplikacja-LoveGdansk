import React from 'react'
import { connect } from 'react-redux'
import SignInForm from './SignInForm'
import SignUpForm from './SignUpForm'
import {Col, Grid, Row} from 'react-bootstrap'

const Auth = ({ user, children }) => (
  user !== null ?
    children :
    <div>
    <h2>Aby dodać wydarzenie do kalendarza musisz być zalogowany</h2>
    <br/>
        <Grid>
        <Col sm={6}><SignUpForm/></Col>
        <Col sm={6}><SignInForm/></Col>
        </Grid>

    </div>
)

export default connect(
  state => ({
    user: state.auth.user
  })
)(Auth)
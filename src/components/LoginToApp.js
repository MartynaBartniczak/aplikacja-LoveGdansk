/**
 * Created by lukaszjeziorski on 20.07.17.
 */

import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
import {
  Row,
  Container,
  Col
}from 'bootstrap'

export default class LoginToApp extends React.Component {
  render() {
    return (
      <DocumentTitle title={`Login`}>
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <h3>Login</h3>
              <hr />
            </div>
          </div>
          <LoginForm />
        </div>
      </DocumentTitle>
    );
  }
}
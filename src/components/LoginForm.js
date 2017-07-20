import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const LoginArea = {
  palette: {
    textColor: 'white',
      primaryColor: 'orange'
  }
}

class LoginForm extends React.Component {
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <TextField
              hintText="Wpisz swoją nazwę użytkownika"
              floatingLabelText="Nazwa użykownika"
              style={LoginArea}
              onChange = {(event,newValue) => this.setState({username:newValue})}
            />
            <br/>
            <TextField
              type="password"
              hintText="Wpisz swoje hasło"
              floatingLabelText="Hasło"
              style={LoginArea}
              onChange = {(event,newValue) => this.setState({password:newValue})}
            />
            <br/>
            <RaisedButton label="Zaloguj" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
};
export default LoginForm;
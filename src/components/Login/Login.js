import React,{useState} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

import './Login.css';
import PropTypes from 'prop-types';

async function loginUser(credentials) {
 return fetch('http://localhost:4000/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json'
   },
   body: JSON.stringify(credentials)
 })
   .then(data => data.json())
}



export default function Login({setToken}) {
     const [username, setUserName] = useState();
     const [password, setPassword] = useState();

     const handleSubmit = async e => {
     e.preventDefault();
     const token = await loginUser({
      username,
      password
    });
     setToken(token);
  }

     return(
          <MuiThemeProvider>
                <h2 className="App-detail mt-5">Please Log In</h2>
                <br />
                <TextField  hintText="Username"
                    floatingLabelFixed="username"
                    onChange={e => setUserName(e.target.value)}
                    defaultValue={username} className="txt-bar"/>
                <br />
                <TextField  hintText="Password"
                    floatingLabelFixed="Password"
                    onChange={e => setPassword(e.target.value)}
                    defaultValue={password} className="txt-bar"/>
                <br />
                <label className="txt-bar mt-5"><RaisedButton label="Submit"
                    primary={false} 
                    onClick={handleSubmit}
                    /> 
                </label>                          
            </MuiThemeProvider> 
  )
}

     Login.propTypes = {
     setToken: PropTypes.func.isRequired
    }
import React,{useState} from 'react';
import { BrowserRouter, Switch, Route,Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './Login.css';
import LoginControl from './LoginControl';



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
    
    return<LoginControl />
    
  }
console.log(username)
     return(
          <MuiThemeProvider>
                <h2 className="App-detail mt-5">Please Log In</h2>
                <br />
                <TextField  hintText="Username"
                    floatingLabelFixed="username"
                    onChange={e => setUserName(e.target.value)}
                    defaultValue={username} className="log-bar"/>
                <br />
                <TextField  hintText="Password"
                    floatingLabelFixed="Password"
                    onChange={e => setPassword(e.target.value)}
                    defaultValue={password} className="log-bar"/>
                <br />
                <Link to="/dashboard">
                <label className="log-bar mt-5"><RaisedButton label="Submit"
                    primary={true} 
                    
                    /> 
                </label></Link>   
                    <BrowserRouter>
                   <Switch>
                     <Route path="/dashboard">
                        <LoginControl />
                     </Route>
                   </Switch>
                </BrowserRouter>                    
            </MuiThemeProvider> 
  )
}

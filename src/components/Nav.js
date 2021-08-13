import {Link, BrowserRouter, Route} from 'react-router-dom';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton'


function Nav() {
   
    const navStyle = {
        color: 'white', textDecoration: 'none'
    }
    const siteTitle = `Chigozie's Cook Book`;

  return (
       <MuiThemeProvider>
    <div style={{
        background: 'green',
         paddingTop: '8px',
    }} className="form-div">
        <nav>
            <Link style={navStyle} to="/" >  
              <h1 className="titles"
                  style={navStyle}>{siteTitle}</h1>   
                  </Link>
            <ul className="nav-link navbar-item" style={{
                listStyle: 'none', 
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '-1rem',
                }}>
                <Link style={navStyle} to="/about" >
                    <li>About</li>
                </Link>
                <Link style={navStyle} to="/signup" >
                    <li>Signup</li>
                </Link>
                <Link style={navStyle} to="/contact" >
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
                <Link to="/login">
                    <RaisedButton label="Login"
                       primary={true}
                    />
                </Link>
    </div>
  </MuiThemeProvider>
  );
}
export default Nav;


/* <Link style={navStyle} to="/exercise" >
                    <li>Edit Exercise</li>
                </Link>
                <Link style={navStyle} to="/create" >
                    <li>Create exercises</li>
                </Link>
                <Link style={navStyle} to="/user" >
                    <li>Create User</li>
                </Link> 
                <label  className="submit-btn"><button type="submit" className="btn-color">
         <input type="text" placeholder="username/email.." name="addText"
          className="form-control "
         />{""}Login</button>
       </label>
       </form>*/
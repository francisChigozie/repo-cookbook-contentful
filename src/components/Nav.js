import {Link, BrowserRouter, Route} from 'react-router-dom';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Search from './SearchBar';



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
                      <SchBar />
                  
            <ul className="nav-link navbar-item" style={{
                listStyle: 'none', 
                display: 'flex',
                justifyContent: 'space-evenly',
                marginTop: '-0.5rem',
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
                       primary={false}
                    />
                </Link>
                </div>
  </MuiThemeProvider>
  );
}

const SchBar = () => {
    const [search, setSearch] = useState ([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(setSearch(e.target.value))

        window.location="/search"

    }
   return (
        <div className="sch-bar">
                <form onSubmit>
             <TextField  hintText="search..bar"
                           floatingLabelFixed="Search Word"
                           onChange={e => setSearch(e.target.value)}
                           onSubmit={handleSubmit} 
                           />
                 <Link to="/search">
             <RaisedButton label="Search" 
                           primary={false} 
                           type="submit"
                          />
                 </Link>     
             </form>
           </div>     
   )
}
export default Nav;

import {Link} from 'react-router-dom';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"

function Nav() {
  

    /* fetch(`${process.env.REACT_APP_API_URL}/app/users`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify()
    })
    .then(res => res.json())
    .then(res => {
      //move the user to the logged in route / component
      console.log(res)
    })
    .catch(err => alert(err))*/
  

    const navStyle = {
        color: 'white', textDecoration: 'none'
    }
    const siteTitle = `Chigozie's Cook Book`;

  return (

    <div style={{
        background: 'green',
         paddingTop: '8px',
    }} className="form-div">
        <nav>
            <Link style={navStyle} to="/" >  
              <h1 className="titles"
                  style={navStyle}>{siteTitle}</h1>
                  <form >
       <label  className="submit-btn"><button type="submit" className="btn-color">
         <input type="text" placeholder="username/email.." name="addText"
          className="form-control "
         />{""}Login</button>
       </label>
       </form>
                     
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
    </div>
  
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
                </Link> */
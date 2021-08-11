import React from 'react'
import {Link} from 'react-router-dom';

class LoginControl extends React.Component {
    constructor(props){
        super(props);
       this.handleLoginClick = this.handleLoginClick.bind(this);
       this.handleLogoutClick = this.handleLogoutClick.bind(this);
       this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }
    handleLogoutClick(){
        this.setState({isLoggedIn: false})
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){
            button = < LogoutButton onClick={this.handleLogoutClick}/>;
        }else{
            button = < LoginButton onClick={this.handleLoginClick}/>;
        }

        return (
            <div  className="App-detail">
                <Greeting isLoggedIn={isLoggedIn}/>{button}
            </div>
        );
    }
}
export default LoginControl;

const navStyle = {
        color: 'white', textDecoration: 'none'
    }

function UserGreeting(props){
    return (
        <div>
            <h1>Welcome back !</h1>
            <div className="loginContainer App-detail" id="flex">
            <div className="box">
                <h4>
                    <Link to="/create" style={navStyle}>Create exercise</Link>
                </h4>
            </div>
            <div className="box">
                 <h4>
                     <Link to="/tocook" style={navStyle}>Create To-Cook</Link>
                 </h4>
            </div>
            </div>

        </div>
    )
}  
function GuestGreeting(props){
    return<h1>Plesae Sign Up!</h1>
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }
    return<GuestGreeting />;
}

function LoginButton(props){
    return(
          <button onClick={props.onClick}>Login</button>              
    )
}

function LogoutButton(props){
    return(
       <button onClick={props.onClick}>Logout</button>       
    )
}

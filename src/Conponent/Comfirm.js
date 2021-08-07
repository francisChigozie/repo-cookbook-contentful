import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem}  from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'


 export class Comfirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
       this.props.nextStep();
    }
     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    
    render() {
        const {values : {firstName,lastName,email,occupation,city,pwd}} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2 className="App-detail">Comfirm Contact Details</h2><br />
                    
                    <List className="App-detail">
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Password"
                            
                            secondaryText="*****"
                        />
                    </List>
                   <br/>
                   <label className="txt-bar"><RaisedButton label="Comfirm And Continue"
                           primary={true} 
                           style={btnStyle.button}
                           onClick={this.continue}
                           /></label>
                    <RaisedButton label="Back"
                           primary={false} 
                           style={btnStyle.button}
                           onClick={this.back} 
                           />                          

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const btnStyle = {button: {margin: 15,color: 'green'}}
const labStyle = {background: 'green'}
export default Comfirm;
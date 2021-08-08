import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List,ListItem}  from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'


 class Confirm extends Component {
    render() {
        const {values, nextStep, prevStep} = this.props;
        const {firstName, lastName, email, occupation, city} = values

        console.log(this.props)
        return (
            <MuiThemeProvider>
                <h2 className="App-detail">Confirm Contact Details</h2>
                <br />
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
                <label className="txt-bar">
                    <RaisedButton label="Comfirm And Continue"
                        primary={true} 
                        style={btnStyle.button}
                        onClick={nextStep}
                    />
                </label>
                <RaisedButton label="Back"
                    primary={false} 
                    style={btnStyle.button}
                    onClick={prevStep} 
                />                          
            </MuiThemeProvider>
        )
    }
}

const btnStyle = {button: {margin: 15,color: 'green'}}

export default Confirm
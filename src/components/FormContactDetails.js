import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


 export class FormContactDetails extends Component {
    render() {
        const {values, handleChange, nextStep} = this.props;
        const {firstName, lastName, email} = values
        return (
            <MuiThemeProvider >
                <h2 className="App-detail">Please Fill in The Form Below</h2><br />
                <TextField  hintText="Enter Your First Name"
                        floatingLabelFixed="First Name"
                        name="firstName"
                        onChange={handleChange}
                        defaultValue={firstName} className="txt-bar"/>
                <br />
                <TextField  hintText="Enter Your Last Name"
                        floatingLabelFixed="Last Name"
                        name="lastName"
                        onChange={handleChange}
                        defaultValue={lastName} className="txt-bar"/>
                <br />
                <TextField  hintText="Enter Your Email"
                    floatingLabelFixed="Email"
                    name="email"
                    onChange={handleChange}
                    defaultValue={email} className="txt-bar"/>
                <br />
                <br />
                <label className="txt-bar">
                    <RaisedButton label="Continue"  
                        primary={true} 
                        style={btnStyle.button} 
                        onClick={nextStep} />
                </label>                       
            </MuiThemeProvider>
        )
    }
}
const btnStyle = {button: {margin: 15}}
export default FormContactDetails;
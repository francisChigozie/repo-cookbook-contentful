import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


 export class FormPersonalDetails extends Component {
    render() {
        const {values, handleChange, nextStep, prevStep} = this.props;
        const {occupation, city, password} = values
        return (
            <MuiThemeProvider>
                <h2 className="App-detail mt-5">Enter Personal Details</h2><br />
                <TextField  hintText="Enter Your Occupation"
                    floatingLabelFixed="Occupation"
                    name="occupation"
                    onChange={handleChange}
                    defaultValue={occupation} className="txt-bar"/>
                <br />
                <TextField  hintText="Enter Your City"
                    floatingLabelFixed="City"
                    name="city"
                    onChange={handleChange}
                    defaultValue={city} className="txt-bar"/>
                <br />
                <TextField  hintText="Enter Your Password"
                    floatingLabelFixed="password"
                    type="password"
                    name="password"
                    onChange={handleChange}
                    defaultValue={password} className="txt-bar"/> 
                <br />
                <label className="txt-bar"><RaisedButton label="Continue"
                    primary={true} 
                    style={btnStyle.button}
                    onClick={nextStep} /> 
                </label>
                <RaisedButton label="Back"
                    primary={false} 
                    style={btnStyle.button}
                    onClick={prevStep}/>                               
            </MuiThemeProvider>
        )
    }
}

const btnStyle = {button: {margin: 15}}

export default FormPersonalDetails;
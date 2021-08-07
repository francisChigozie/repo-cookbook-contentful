import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


 export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
     back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <h2 className="App-detail">Enter Personal Details</h2><br />
                    
                    <TextField  hintText="Enter Your Occupation"
                           floatingLabelFixed="Occupation"
                           onChange={handleChange('occupation')}
                           defaultValue={values.occupation} className="txt-bar"/>
                <br />
                    <TextField  hintText="Enter Your City"
                           floatingLabelFixed="City"
                           onChange={handleChange('city')}
                           defaultValue={values.city} className="txt-bar"/>
                <br />
                    <TextField  hintText="Enter Your Password"
                           floatingLabelFixed="Pwd"
                           type="password"
                           onChange={handleChange('pwd')}
                           defaultValue={values.pwd} className="txt-bar"/> <br />
                    <labe className="txt-bar"><RaisedButton label="Contnue"
                           primary={true} 
                           style={btnStyle.button}
                           onClick={this.continue} /> </labe>
                    <RaisedButton label="Back"
                           primary={false} 
                           style={btnStyle.button}
                           onClick={this.back}/>                               

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const btnStyle = {button: {margin: 15}}

export default FormPersonalDetails;
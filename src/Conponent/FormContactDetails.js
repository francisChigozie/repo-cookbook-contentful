import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'


 export class FormContactDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <h2 className="App-detail">Please Fill in The Form Below</h2><br />
                    <TextField  hintText="Enter Your First Name"
                           floatingLabelFixed="First Name"
                           name="firstName"
                           onChange={handleChange}
                           defaultValue={values.firstName} className="txt-bar"/>
                <br />
                   <TextField  hintText="Enter Your Last Name"
                           floatingLabelFixed="Last Name"
                           name="lasttName"
                           onChange={handleChange}
                           defaultValue={values.lastName} className="txt-bar"/>
                <br />
                    <TextField  hintText="Enter Your Email"
                           floatingLabelFixed="Email"
                           name="email"
                           onChange={handleChange}
                           defaultValue={values.email} className="txt-bar"/><br />
                           <br />
                   <label className="txt-bar"><RaisedButton label="Continue"  
                           primary={true} 
                           style={btnStyle.button} 
                           onClick={this.continue} /></label>                       
                    
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
const btnStyle = {button: {margin: 15}}
export default FormContactDetails;
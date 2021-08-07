import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

 export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    
                    <h1 className="App-detail">Thank You For Completing The Form</h1>
                    <h6 className="App-detail">You can now log in</h6>                      

                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}
export default Success;
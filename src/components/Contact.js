
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import React, { useState} from 'react'

function ContactForm(){
  const [first,setFirst] = useState("")
  const [last,setLast] = useState("")
  const [email,setEmail] = useState("")
  const [text,setText] = useState("")

function handleSubmit(e){
     e.preventDeault()
     const addInput = e.target.value;
     setEmail(addInput) 
     setFirst(addInput)
     setLast(addInput)
     setText(addInput)
  }
 
  function handleChange(e){
  //e.preventDeault();
  const addInput = e.target.value;
  }
 
         return (
           <MuiThemeProvider >
                <React.Fragment>
                  <form onSubmit={handleSubmit}>
                    <h2 className="App-detail mt-4">Enter Contact Details</h2><br />
                    <TextField  hintText="Enter Your First Name"
                           floatingLabelFixed="First Name"
                           onChange={handleChange}
                            className="txt-bar"/>
                <br />
                   <TextField  hintText="Enter Your Last Name"
                           floatingLabelFixed="Last Name"
                           onChange={handleChange}
                           className="txt-bar"/>
                <br />
                    <TextField  hintText="Enter Your Email"
                           floatingLabelFixed="Email"
                           onChange={handleChange}
                           className="txt-bar"/><br />
                          <label className="txt-bar"><textarea placeholder="Write your information here..."
                                           id="text" rows
                                           ="10" cols="40"
                                           
                                           onChange={handleChange}>

                          </textarea></label><br />
                   <label className="txts-bar"><RaisedButton label="Submit"  
                           primary={true} 
                           style={btnStyle.button} 
                           type="submit"
                           /></label>                       
                 </form>
                </React.Fragment>
            </MuiThemeProvider>
        );

      }
    
      const btnStyle = {button: {margin: 15}}
      const navStyle = {
        color: 'white', textDecoration: 'none'
    }
export default ContactForm;
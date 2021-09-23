import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import React, { useState} from 'react'

function ContactForm(){
  const [fullName,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [subject,setSubject] = useState("")
  const [txtArea,setTxtArea] = useState("")

 const handleSubmit =async (e) =>{
       e.preventDefault();
         try{
       const mail = {
           fullName,
           email,
           subject,
           txtArea
         };
       const response = await fetch(`${process.env.REACT_APP_API_URL}/mail`,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(mail)
       } )
       console.log(response);
        }
        catch(err){console.error(err.message)}
    
         window.location = "/contact";
    }

         return (
           <MuiThemeProvider >
                <React.Fragment>
                  <form onSubmit={handleSubmit}>
                    <h2 className="App-detail mt-4">Enter Contact Details</h2><br />
                    <TextField  hintText="Enter Your Full Name"
                           floatingLabelFixed="Full Name"
                           onChange={e => setFullName(e.target.value)}
                            className="txt-bar"/>
                <br />
                    <TextField  hintText="Enter Your Email"
                           floatingLabelFixed="Email"
                           onChange={e => setEmail(e.target.value)}
                           className="txt-bar"/><br />
                           <TextField  hintText="Enter The Subject"
                           floatingLabelFixed="Subject"
                           onChange={e => setSubject(e.target.value)}
                           className="txt-bar"/>
                <br />
                          <label className="txt-bar"><textarea placeholder="Write your information here..."
                                           id="text" rows
                                           ="10" cols="40"
                                           
                                           onChange={e => setTxtArea(e.target.value)}>

                          </textarea></label><br />
                   <label className="txts-bar"><RaisedButton label="Submit"  
                           primary={true} 
                           style={btnStyle.button} 
                           type="submit"
                           onClick={handleSubmit}
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
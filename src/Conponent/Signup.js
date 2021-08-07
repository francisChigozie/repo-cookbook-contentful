
import FormContactDetails from './FormContactDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Comfirm from "./Comfirm";
import Success from "./Success";

import React, { Component } from 'react'

export class Contact extends Component {
  constructor(props){
    super(props);

     this.onClick = this.onClick.bind(this)
     this.nextStep = this.nextStep.bind(this)

     this.state = {
    step: 1, firstName: '', lastName: '',
    email: '',occupation: '', city: '',pwd: ''
  }
  
  }
  
  // Procceed to next step
  nextStep = () => {
    console.log("xxx")
    const {step} = this.state;
    this.setState({step: step + 1});
    console.log("step",step)
  }

  // Go back to previous step
  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1});
  }

  // HandleSubmit
handleSubmit = e => {
   e.preventDefault();
  

  console.log( e.target.value)
  //Make a post request
  
}

// Handle fields change
handleChange = e => {
   e.preventDefault();
  this.setState({[e.target.name]: e.target.value});
}

  render() {
    const {step} = this.state;
    const {firstName,lastName,email,occupation,city,pwd} = this.state;
    const values = {firstName,lastName,email,occupation,city,pwd}
   
    switch(step) {
      case 1:
        return(
          <FormContactDetails  nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values} />
        );
        case 2:
          return (
          <FormPersonalDetails  nextStep={this.nextStep}
                        prevStep={this.prevStep}  
                        handleChange={this.handleChange}
                        values={values}/>
        );
        case 3:
          return (
          <Comfirm  nextStep={this.nextStep}
                        prevStep={this.prevStep}  
                        values={values}/>
        ); 
        case 4:
           return <Success/>    
    }
  }
}
export default Contact;
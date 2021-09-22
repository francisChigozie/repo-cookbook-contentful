
import FormContactDetails from './FormContactDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from "./Confirm";
import Success from "./Success";

import React, { Component } from 'react'

export class Contact extends Component {
  constructor(props){
    super(props);

    this.nextStep = this.nextStep.bind(this)
    this.prevStep = this.prevStep.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.sendSignupRequest = this.sendSignupRequest.bind(this)
    
    this.state = {
      step: 1,
      firstName: '',
      lastName: '',
      email: '',
      occupation: '',
      city: '',
      password: ''
    }
  }
  
  sendSignupRequest() {
    const userData = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      occupation: this.state.occupation,
      city: this.state.city,
      password: this.state.password
    }

    console.log("user confirmed form, submitting now", userData, process.env.REACT_APP_API_URL)

    fetch(`${process.env.REACT_APP_API_URL}/app/user`, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(res => {
      //move the user to the logged in route / component
      console.log(res)
    })
    .catch(err => alert(err))
  }

  nextStep = () => {
    const {step} = this.state;
    this.setState({step: step + 1});
    console.log("step is", step)
    if(step === 3) {
      this.sendSignupRequest()
    }
  }

  prevStep = () => {
    const {step} = this.state;
    this.setState({step: step - 1});
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value});
  }

  render() {
    const {step} = this.state;
   
    switch(step) {
      case 1:
        return <FormContactDetails  
          nextStep={this.nextStep}
          handleChange={this.handleChange}
          values={this.state}
          />
      case 2:
        return <FormPersonalDetails  
          nextStep={this.nextStep}
          prevStep={this.prevStep}  
          handleChange={this.handleChange}
          values={this.state}
          />
      case 3:
        return  <Confirm  
          nextStep={this.nextStep}
          prevStep={this.prevStep}  
          values={this.state}
          />
      case 4:
          return <Success/>    
    }
  }
}
export default Contact;
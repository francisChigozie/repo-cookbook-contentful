
function About() {

  return (
    <div className="App">
        <h1>Welcome to about page!</h1>
      
    </div>
  );
}
export default About;
/*
import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: "",
            description: "",
            duration: 0,
            date: new Date(),
            users: [],
        }
    }

    componentDidMount(){
        this.setState({
            users: ['test user'],
            username: 'test user',
        })
    }

    onChangeUsername(e){
        this.setState({username: e.target.value});
    }

    onChangeDescription(e){
        this.setState({description: e.target.value});
    }

    onChangeDuration(e){
        this.setState({duration: e.target.value});
    }

    onChangeDate(date){
        this.setState({date: date});
    }

    onSubmit(e){
        e.preventDefault();

        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date,
        }

        console.log(exercise);
        window.location = "/";
    }

    render() {
        return (
            <div className="App-contact">
               <h3>Create New Exercise Log</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>Username:</label>
                       <select ref="userInput"
                       required
                       className="form-control"
                       value={this.state.username}
                       onChange={this.onChangeUsername}>
                       {
                           this.state.users.map(function(user) {
                               return<option
                                   key={user}
                                   value={user}>{user}
                               </option>;
                           })
                       }
                     </select>
                     <div className="form-group">
                         <label>Description:</label>
                         <input type="text"
                                required
                                className="form-control"
                                value={this.state.description}
                                onChange={this.onChangeDescription}
                                />
                     <div className="form-group">
                         <label>Duration(in minutes):</label>
                         <input type="text"
                                required
                                className="form-control"
                                value={this.state.duration}
                                onChange={this.onChangeDuration}
                                />
                     <div className="form-group">
                         <label>Date:</label> 
                         <div>
                           <DatePicker
                           selected={this.state.date}
                           onChange={this.onChangeDate}
                           />  
                     <div className="form-group">
                         <input type="submit" value="Create Exercise Log"
                         className="btn btn-primary mt-3" />
                         </div>        
                             </div> 
                         </div>            
                     </div>           
                     </div>
                   </div>
                   </form> 
            </div>
        )
    }
}*/
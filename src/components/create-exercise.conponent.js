import React, { Component } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

 class CreateExercise extends Component {
    constructor(props){
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeDuration = this.onChangeDuration.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            firstName: "",
            description: "",
            duration: "",
            date: new Date(),
            users: []
        }
    }

    componentDidMount(){
        axios.get(`${process.env.REACT_APP_API_URL}/users`)
          .then(response => {
              if(response.data.length > 0){
                  this.setState({
            users: response.data.map( user => user.firstName),
            firstName: response.data[0].firstName
        })
              }
          })
    }

    onChangeUsername(e){
        this.setState({firstName: e.target.value});
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
            firstName: this.state.firstName,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }

        console.log(exercise)

       axios.post(`${process.env.REACT_APP_API_URL}/exercise`)
          .then(res => console.log(res.data));
        window.location = "/exercise";
    }

    render() {
        return (
            <div>
               <h3 className="exercise-log">Create New Exercise Log</h3>
               <form onSubmit={this.onSubmit}>
                   <div className="form-group">
                       <label>username:</label>
                       <select ref="userInput"
                       required
                       className="form-control"
                       value={this.state.firstName}
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

                     <div className="form-group mt-3">
                         <input type="submit" value="Create Exercise Log"
                         className="btn btn-primary"/>
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
}
export default CreateExercise;      
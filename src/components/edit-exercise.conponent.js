import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { useParams } from 'react-router';
import axios from 'axios';

import React,{Fragment,useState} from 'react'

export default function EditExercise( {exercise}) {
   const [firstName,setFirstName] = useState(exercise.firstName);
    const [description,setDescription] = useState(exercise.description);
    const [duration,setDuration] = useState(exercise.duration);
    const [date,setDate] = useState(exercise.date);
    

    // Update Description function
     const updateExerciseDes = async (e) => {
        e.preventDefault();

    try{
         const exercise = {
           firstName,
           description,
           duration,
           date
         };
         var update = exercise;
         console.log(update)
       const response = await fetch(`${process.env.REACT_APP_API_URL}/app/exercises/update/:id`,{
          method: "PUT",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(update)
       });
     //console.log(response.json())
         window.location="/exercise";
         alert('Updated successfully!');
         }
         catch(err) {
            console.error(err.message)
            alert('An error occurred! Try updating again.');
        }
    }

    return (
        <MuiThemeProvider>
            <Fragment>
<button type="button" 
        class="btn btn-warning" 
        data-toggle="modal" 
        data-target={`#id${exercise._id}`}>
        Edit
</button>

<div class="modal" id={`id${exercise._id}`} 
     onClick={() => setDescription(exercise.description)}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Exercise</h4>
        <button type="button" class="close" data-dismiss="modal"
        onClick={() => setDescription(exercise.description)}
        >&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={description}
        onChange={e => setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal"
        onClick={ updateExerciseDes}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal"
        onClick={() => setDescription(exercise.description)}
        >Close</button>
      </div>

    </div>
  </div>
</div>
       </Fragment>
        </MuiThemeProvider>
    )
}
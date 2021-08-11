import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { useParams } from 'react-router';

import React,{Fragment,useState} from 'react'

export default function EditExercise( {exercise}) {
    const [description,setDescription] = useState(exercise.description);
    //const [duration,setDuration] = useState(exercise.duration);

    // Update Description function
    const updateDescription = async (e) => {
        e.preventDefault();
        try{
         const body = {description};
         const response = await fetch(`${process.env.REACT_APP_API_URL}app/exercises/${exercise.exercise_id}`,{
             method: "PUT",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(body)
         });
         console.log(response)
         window.location="/exercise";
        }
        catch(err) {
            console.error(err.message)
        }
    }
    return (
        <MuiThemeProvider>
            <Fragment>
<button type="button" 
        class="btn btn-warning" 
        data-toggle="modal" 
        data-target={`#id${exercise.exercise_id}`}>
        Edit
</button>

<div class="modal" id={`id${exercise.exercise_id}`} 
     onClick={() => setDescription(exercise.description)}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Exercise</h4>
        <button type="button" class="close" data-dismiss="modal"
        onClick={() => setDescription(exercise.description)}>&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={description}
        onChange={e => setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal"
        onClick={e => updateDescription}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal"
        onClick={() => setDescription(exercise.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
       </Fragment>
        </MuiThemeProvider>
    )
}
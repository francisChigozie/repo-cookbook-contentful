import React, { Component, useState, useEffect} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'
import EditExercise from './edit-exercise.conponent';
import { useParams } from 'react-router';


export default function ExerciseList() {
    const [exercise,setExercise] = useState([]);

    // Delete Button
    const deleteExercise = async(id) => {
        try{

         const deleteExercise = await fetch(`${process.env.REACT_APP_API_URL}/app/exercises${id}`,{
             method: "DELETE"
         });
         setExercise(exercise.filter(exer => exer.exercise_id !==id));
        }
        catch(err) {console.error(err.message)}
    }

    const getExercises = async () => {
        try{
       const response = await fetch(`${process.env.REACT_APP_API_URL}/app/exercises`)
       const jsonData = await response.json();
         setExercise(jsonData);
        }
        catch(err){console.error(err.message);}
    }
    
    useEffect(() => {
        getExercises()
    },[]);
    console.log(exercise)

    return (
        <MuiThemeProvider>
            <h1>Logged Exercises</h1> 
               <table className="table mt-5">
                     <thead className="thead-light">
                         <tr>
                             <th>Description</th>
                             <th>Duration</th>
                             <th>Date</th>
                             <th>Change</th>
                             <th>Remove</th>

                         </tr>
                     </thead>
    <tbody>
     {exercise.map((exercise) => (
        <tr key={exercise.exercise_id}>
            <td>{exercise.description}</td>
            <td>{exercise.duration}</td>
            <td>{exercise.date}</td>
            <td><EditExercise exercise={exercise}/></td>
            <td><button 
                   className="btn btn-danger"
                   onClick={() => deleteExercise(exercise.exercise_id)}>
                   Delete</button></td>
        </tr>
     ))}
       
    </tbody>
  </table>
         </MuiThemeProvider>
    )
     }
import React, { Component, useState, useEffect} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { Link } from 'react-router-dom'
import EditExercise from './edit-exercise.conponent';
import { useParams } from 'react-router';
import axios from 'axios';


export default function ExerciseList() {
    const [exercises,setExercise] = useState([]);

    // Delete Button
    const deleteExercise = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_URL}/exercises/${id}`)
           .then(res => console.log(res.exercises));
            setExercise(exercises.filter(exercise => exercise._id !==id));
    }

    /*const deleteExercise = async(id) => {
        try{

         const deleteExercise = await fetch(`${process.env.REACT_APP_API_URL}/app/exercises${id}`,{
             method: "DELETE"
         });
         setExercise(exercises.filter(exercise => exercise._id !==id));
        }
        catch(err) {console.error(err.message)}
    }*/

    const getExercises = async () => {
        try{
       const response = await fetch(`${process.env.REACT_APP_API_URL}/exercises`,{
           method: "GET"
       })
       const jsonData = await response.json();
         setExercise(jsonData);
        }
        catch(err){console.error(err.message);}
    }
    
    useEffect(() => {
        getExercises()
    },[]);
    console.log(exercises)

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
     {exercises.map((exercise) => (
        <tr key={exercise._id}>
            <td>{exercise.description}</td>
            <td>{exercise.duration}</td>
            <td>{exercise.date}</td>
            <td><EditExercise exercise={exercise}/></td>
            <td><button 
                   className="btn btn-danger"
                   onClick={() => deleteExercise(exercise._id)}>
                   Delete</button></td>
        </tr>
     ))}
      
    </tbody>
  </table>
         </MuiThemeProvider>
    )
     }

     
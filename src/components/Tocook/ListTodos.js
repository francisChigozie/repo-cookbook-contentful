import React,{useEffect,useState} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import EditTodo from './EditTodo';
import { useParams } from 'react-router';

export default function ListTodos() {
    const [todos,setTodos] = useState([]);

    // Delete Button
    const deleteTodo = async(id) => {
        try{

         const deleteTodo = await fetch(`${process.env.REACT_APP_API_URL}/app/todos${id}`,{
             method: "DELETE"
         });
         setTodos(todos.filter(todo => todo.todo_id !==id));
        }
        catch(err) {console.error(err.message)}
    }

    const getTodos = async () => {
        try{
       const response = await fetch(`${process.env.REACT_APP_API_URL}/app/todos`)
       const jsonData = await response.json();
         setTodos(jsonData);
        }
        catch(err){console.error(err.message);}
    }
    
    useEffect(() => {
        getTodos()
    },[]);
    console.log(todos)

    return (
        <MuiThemeProvider>
            {""}
             <table class="table mt-5">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
     {todos.map((todo) => (
        <tr key={todo.todo_id}>
            <td>{todo.description}</td>
            <td><EditTodo todo={todo}/></td>
            <td><button 
                   className="btn btn-danger"
                   onClick={() => deleteTodo(todo.todo_id)}>
                   Delete</button></td>
        </tr>
     ))}
       
    </tbody>
  </table>
        </MuiThemeProvider>
    )
}

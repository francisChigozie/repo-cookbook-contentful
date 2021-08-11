import React,{Fragment,useState} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
export default function InputTodo() {
    const [description,setDescription] = useState("");

    const onSubmitForm = async(e) => {
         e.preventDefault();
        try{
       const body = {description};
       const response = await fetch(`${process.env.REACT_APP_API_URL}/app/todo`,{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(body)
       } )
       console.log(response);
       window.location = "/tocook";
      
        }
        catch(err){console.error(err.message)}
    
    }
    return (
        <MuiThemeProvider>
            <form onSubmit={onSubmitForm}>
                <label className="input"><input type="text" className="form-group"
                 value={description} 
                 placeholder="Make a food time table.."
                 onChange={e => setDescription(e.target.value)}/>
                 <button className="btn-success">ADD</button></label>
            </form>
        </MuiThemeProvider>
    )
}
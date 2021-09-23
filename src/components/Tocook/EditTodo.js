import React,{Fragment,useState} from 'react'


export default function ( {todo}) {
    const [description,setDescription] = useState(todo.description);

    // Update Description function
    const updateDescription = async (e) => {
        e.preventDefault();
        try{
         const body = {description};
         console.log(todo)
         const response = await fetch(`${process.env.REACT_APP_API_URL}/todos/update/${todo._id}`,{
             method: "PUT",
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(body)
         });
         console.log(response.json())
         window.location = "/tocook";
        }
        catch(err) {
            console.error(err.message)
        }
    }
    return (
        <Fragment>
<button type="button" 
        class="btn btn-warning" 
        data-toggle="modal" 
        data-target={`#id${todo._id}`}>
        Edit
</button>

<div class="modal" id={`id${todo._id}`} 
     onClick={() => setDescription(todo.description)}>
  <div class="modal-dialog">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="modal-title">Edit Todo</h4>
        <button type="button" class="close" data-dismiss="modal"
        onClick={() => setDescription(todo.description)}>&times;</button>
      </div>

      <div class="modal-body">
        <input type="text" className="form-control" value={description}
        onChange={e => setDescription(e.target.value)}/>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal"
        onClick={ updateDescription}>Edit</button>
        <button type="button" class="btn btn-danger" data-dismiss="modal"
        onClick={() => setDescription(todo.description)}>Close</button>
      </div>

    </div>
  </div>
</div>
        </Fragment>
    )
}

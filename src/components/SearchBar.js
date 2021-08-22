import { Link} from "react-router-dom";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Nav from "./Nav";
import { render } from "@testing-library/react";


const Search =() => {
     const [search, setSearch] = useState([]);

     const url = "https://hn.algolia.com/api/v1/search?query=items";
     const queryParams = 'rel_jja=';

     const handleSubmit = () => {
     
    console.log('Search is :',setSearch())
}

   useEffect(() =>{
      setSearch( getSuggestions())

   },[]);

    const getSuggestions = async () => {
    const wordQuery = handleSubmit();
    const endPoint = `${url}${queryParams}`;

    try{
        const Response = await fetch(endPoint, {
            cache: 'no-cache'
        });

        if(Response.ok){
            const jsonResponse = await Response.json();
            console.log(jsonResponse)
            setSearch(jsonResponse)
        }

    }
    catch(error){console.log(error)};
    }

    return (
            <MuiThemeProvider>
                <h1>This is Your Search Results</h1>
                {search.hitsperpage}
            </MuiThemeProvider>
        
    )
}
export default Search;
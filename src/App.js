import About from "./components/About"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ExerciseList from "./components/exercises-list.conponent";
import EditExercise from "./components/edit-exercise.conponent";
import CreateExercise from "./components/create-exercise.conponent.js";
import CreateUser from "./components/create-user.conponent";
import Posts from "./components/Posts"
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { client } from "./client";
import ArticleDetail from "./components/ArticleDetail";
import LoginControl from "./components/LoginControl"


function App() {

  return (
    <Router>
    <div className="App-contact">
        <Nav />
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/login" component={LoginControl}/>
             <Route path="/article/:id" component={ArticleDetail}/>
          </Switch>
            
    </div>
    </Router>
  );
}
const Home = () =>{
  const [articles, setArticles] = useState([]);
  const [login, setLogin] = useState("");

  const inputRef = React.useRef();

  useEffect(() => {
    
    client.getEntries()
      .then((response) => {
        console.log(response)
        setArticles(response.items)
      })
      .catch(console.error)
  }, [])

  
  function handleSubmit(e){
    e.preventDefault();

    const loginText = console.log(e.target.input.value);
    if(!loginText){
    console.log('You have not entered any text to submit');
    }else{
       setLogin(loginText);
    }
     inputRef.current.value = "";
  }
  
  return(
    <div className="App-contact">
       
       <label className="contentful"><div className="container ">
          <header>
             <div className="wrapper"></div> 
          </header>
          <main>
             <div className="wrapper">
               <Posts posts={articles}/>
             </div>
          </main>
       </div></label>
    </div>
  )
}
export default App;

            /*<Route path="/exercise" component={ExerciseList}/>
            <Route path="/edit/:id" component={EditExercise}/>
            <Route path="/create" component={CreateExercise}/>
            <Route path="/user" component={CreateUser}/> */
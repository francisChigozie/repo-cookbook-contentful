import About from "./components/About"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/edit-exercise.conponent";
import CreateExercise from "./components/create-exercise.conponent.js";
import Posts from "./components/Posts"
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { client } from "./client";
import ArticleDetail from "./components/ArticleDetail";
import LoginControl from "./components/LoginControl"
import Preferences from "./components/Preferences";
import Todo from "./components/Tocook/Todo";


function App() {
  
  return (
    <Router>
    <div className="App-contact">
       <div>
          <Nav />
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/dashboard" component={LoginControl}/>
             <Route path="/preferences" component={Preferences}/>
             <Route path="/article/:id" component={ArticleDetail}/>
          </Switch>
       </div>
          <div className="form-div">
            <Route path="/create" component={CreateExercise}/>
            <Route path="/tocook" component={Todo}/>
            <Route path="/exercise" component={ExerciseList}/>
            <Route path="/edit/:id" component={EditExercise}/>

          </div>
    </div>
    </Router>
  );
}
const Home = () =>{
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    
    client.getEntries()
      .then((response) => {
        console.log(response)
        setArticles(response.items)
      })
      .catch(console.error)
  }, [])

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
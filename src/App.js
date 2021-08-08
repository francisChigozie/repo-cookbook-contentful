import About from "./components/About"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Posts from "./components/Posts"
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
//import { client } from "./client";
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
 
  return(
    <div className="App-contact">
       
       <label className="contentful"><div className="container ">
          <header>
             <div className="wrapper"></div> 
          </header>
          <main>
             <div className="wrapper">
              <h1>Welcome to Home Page</h1>
               {/*<Posts posts={articles}/>*/}
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
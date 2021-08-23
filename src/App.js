import About from "./components/About"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import Nav from "./components/Nav"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/edit-exercise.conponent";
import CreateExercise from "./components/create-exercise.conponent.js";
import Posts from "./components/Posts"
import React,{useState,useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { client } from "./client";
import ArticleDetail from "./components/ArticleDetail";
import Todo from "./components/Tocook/Todo";
import LoginControl from "./components/Login/LoginControl"
import Login from "./components/Login/Login";
import Search from "./components/SearchBar";


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
             <Route path="/article/:id" component={ArticleDetail}/>
             <Route path="/dashboard" component={LoginControl}/>
          </Switch>
       </div>
          <div className="form-div">
             <Route path="/create" component={CreateExercise}/>
             <Route path="/tocook" component={Todo}/>
             <Route path="/exercise" component={ExerciseList}/>
             <Route path="/edit/:id" component={EditExercise}/>
             <Route path="/login" component={Login}/>
             <Route path="/search" component={Search}/>
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
  }, []);

          if(articles.length){
     return(
    <MuiThemeProvider >
       <label className="contentful"><div className="container ">
          <header>

          </header>
          <main>
             <div className="wrapper">
               <Posts posts={articles}/>
             </div>
          </main>
       </div></label>
    </MuiThemeProvider>
  )
          }else{
             return(
                <h1>loading..</h1>
             )
          }
 
}
export default App;
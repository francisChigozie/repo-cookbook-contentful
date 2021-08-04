import About from "./Conponent/About"
import Signup from "./Conponent/Signup"
import Contact from "./Conponent/Contact"
import Nav from "./Conponent/Nav"
import './App.css';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {

  return (
    <Router>
    <div className="Ap">
        <Nav />
          <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/about" component={About}/>
             <Route path="/signup" component={Signup}/>
             <Route path="/contact" component={Contact}/>
          </Switch>
    </div>
    </Router>
  );
}
const Home = () =>{
  return(
    <div>
      <form>
       <label  className="submit-btn"><button type="submit" className="btn-color">
         <input type="text" placeholder="search.."/>{""}Submit</button>
       </label>
       </form>
    </div>
  )
}
export default App;
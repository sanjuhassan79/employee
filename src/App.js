
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
import Home from './component/Home/Home';
import Employe from './component/Employe/Employe';
import SingleEmployee from './component/SingleEmployee/SingleEmployee';
import NotFound from './component/NotFound/NotFound';
import Navbar from './component/Navbar/Navbar';
function App() {
  return (
    <div className="App">
      <Router>
      <div>
       <Navbar/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/Employe">
           <Employe /> 
          </Route>
          <Route exact path="/Employe/:id">
            <SingleEmployee />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;

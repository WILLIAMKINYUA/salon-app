import {BrowserRouter as Router,Route,Switch} from"react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Transport from "./Pages/Transport/Transport";
import Contact from "./Pages/Contact/Contact";
import Header from "./Navbar/Header";




function App() {
  return (
    <div className="App">
    <Router> <Header/>
      <Switch>
      <Route exact="/"path="/" ><Home/></Route>
      <Route path="/about"><About/></Route>
      <Route path="/transport"><Transport/></Route>
      <Route path="/contact"><Contact/></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;

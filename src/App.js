import logo from "./logo.svg";
import "./App.css";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";
import Coffee from "./Coffee";
import CoffeeInfo from "./CoffeeInfo";
import Nav from "./Nav";
import About from "./About";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Redirect from="/home" to="/" />
          <Route path="/about" component={About}></Route>
          <Route path="/coffee/:type" exact component={Coffee}></Route>
          <Route path="/coffee/:type/:id" component={CoffeeInfo}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Coffee from "./Coffee";
import CoffeeInfo from "./CoffeeInfo";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/coffee/:name" exact component={Coffee}></Route>
          <Route path="/coffee/:name/:id" exact component={CoffeeInfo}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

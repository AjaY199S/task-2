import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import Home from "./componenet/home";
import Sigup from "./componenet/signup";
import Login from "./componenet/login";
import Profile from "./componenet/profile";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={Sigup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/" component={Home} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;

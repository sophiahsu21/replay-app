import './App.scss';
import SignIn from 'pages/SignIn';
import CreateAccount from 'pages/CreateAccount';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <Link to="/">Sign In</Link>
          <Link to="/CreateAccount">Sign Up</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/CreateAccount">
            <CreateAccount />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
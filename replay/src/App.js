import './App.scss';

//import pages
import SignIn from 'pages/SignIn';
import CreateAccount from 'pages/CreateAccount';
import CreatePlaylist from 'pages/CreatePlaylist';

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
        <div className="pagesIndex">
          <h1>Pages</h1>
          <Link to="/">Sign In</Link>
          <Link to="/CreateAccount">Sign Up</Link>
          <Link to="/CreatePlaylist">Create Playlists</Link>
        </div>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route exact path="/CreateAccount">
            <CreateAccount />
          </Route>
          <Route exact path="/CreatePlaylist">
            <CreatePlaylist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
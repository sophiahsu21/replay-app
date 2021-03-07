import './App.scss';

//import pages
import LandingPage from 'pages/LandingPage';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';
import NewPlaylist from 'pages/NewPlaylist';

import AddSong from 'comps/AddSong';

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
          <Link to="/">Landing Page</Link>
          <Link to="/LogIn">Sign In</Link>
          <Link to="/Register">Sign Up</Link>
          <Link to="/NewPlaylist">Create Playlists</Link>
          <AddSong />
        </div>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
          <Route exact path="/Register">
            <Register />
          </Route>
          <Route exact path="/NewPlaylist">
            <NewPlaylist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
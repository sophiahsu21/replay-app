import './App.scss';

//import pages
import LandingPage from 'pages/LandingPage';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';
import NewPlaylist from 'pages/NewPlaylist';
import PlaylistAdd from 'pages/PlaylistAdd';
import AddSongs from 'pages/AddSongs';
import Home from 'pages/home';
import Profile from 'pages/Profile';
import ViewPlaylist from 'pages/ViewPlaylist';
import Modal from 'comps/Modal';

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
          <Link to="/PlaylistAdd">Playlist Add</Link>
          <Link to="/AddSongs">Add Songs</Link>
          <Link to="/Home">Home</Link>
          <Link to="/Profile">Profile</Link>
          <Link to="/ViewPlaylist">View Playlist</Link>
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
          <Route exact path="/PlaylistAdd">
            <PlaylistAdd />
          </Route>
          <Route exact path="/AddSongs">
            <AddSongs />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>    
          <Route exact path="/ViewPlaylist">
            <ViewPlaylist />
          </Route>         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
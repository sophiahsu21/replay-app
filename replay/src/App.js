import './App.scss';

//import pages
import LandingPage from 'pages/LandingPage';
import LogIn from 'pages/LogIn';
import Register from 'pages/Register';
import NewPlaylist from 'pages/NewPlaylist';
import AddSongs from 'pages/AddSongs';
import Home from 'pages/Home';
import SearchPlaylist from 'pages/SearchPlaylist';
import Profile from 'pages/Profile';
import ViewPlaylist from 'pages/ViewPlaylist';
import ViewProfile from 'pages/ViewProfile';
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
          <Route exact path="/AddSongs">
            <AddSongs />
          </Route>
          <Route path="/AddSongs/:id">
            <AddSongs />
          </Route>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/SearchPlaylist">
            <SearchPlaylist />
          </Route>
          <Route exact path="/Profile">
            <Profile />
          </Route>
          <Route path="/ViewProfile/:id">
            <ViewProfile />
          </Route>    
          <Route exact path="/ViewPlaylist">
            <ViewPlaylist />
          </Route>
          <Route path="/ViewPlaylist/:id">
            <ViewPlaylist />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
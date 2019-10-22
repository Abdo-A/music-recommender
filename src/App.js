import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import Header from './components/header';
import PlaylistsList from './pages/playlistsList';
import TrackInfo from './pages/trackInfo';
import TracksList from './pages/tracksList';

import './App.css';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" exact component={PlaylistsList} />
      <Route path="/playlist/:playlistId" component={TracksList} />
      <Route path="/track/:trackId" component={TrackInfo} />
      <Redirect to={PlaylistsList} />
    </Switch>
    <p>
      An app made by Abdelrahman Mohamadeen, as task for <b>Homitag</b>
    </p>
  </div>
);

export default App;

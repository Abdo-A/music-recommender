import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import Header from './components/header';
import PlaylistsList from './pages/playlistsList';
import TrackInfo from './pages/trackInfo';
import TracksList from './pages/tracksList';

import './App.css';
import playlistsList from './pages/playlistsList';

const App = () => (
  <div className="App">
    <Header />
    <Switch>
      <Route path="/" exact component={PlaylistsList} />
      <Route path="/playlist/:playlistId" component={TracksList} />
      <Route path="/track" component={TrackInfo} />
      <Redirect to={playlistsList} />
    </Switch>
  </div>
  );

export default App;

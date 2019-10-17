import { Switch, Route } from 'react-router-dom';
import React from 'react';

import Header from './components/header';
import PlaylistsList from './pages/playlistsList';
import TrackInfo from './pages/trackInfo';
import TracksList from './pages/tracksList';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' exact component={PlaylistsList} />
        <Route path='/playlist' component={TracksList} />
        <Route path='/track' component={TrackInfo} />
      </Switch>
    </div>
  );
};

export default App;

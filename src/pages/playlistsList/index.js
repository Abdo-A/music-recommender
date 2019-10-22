import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';
import Playlist from '../../components/playlist';

const PlaylistsList = ({
 getPlaylists, playlists, userCountry, history,
}) => {
  useEffect(() => {
    if (!playlists.length) {
      getPlaylists();
    }
  }, [getPlaylists, playlists.length]);

  const handleViewTrackList = (playlistId) => {
    history.push(`/playlist/${playlistId}`);
  };

  return (
    <div>
      {
        userCountry
        && <h3>Showing recommended playlists according to your country:{' '}
          <b>{userCountry}</b>
        </h3>
      }
      {playlists.map((playlist) => (
        <Playlist
          key={playlist.id}
          playlist={playlist}
          onClick={() => handleViewTrackList(playlist.id)}
        />
      ))}
    </div>
  );
};

PlaylistsList.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,

  getPlaylists: PropTypes.func.isRequired,
  playlists: PropTypes.arrayOf(PropTypes.shape({})),
  userCountry: PropTypes.string,
};

PlaylistsList.defaultProps = {
  playlists: [],
  userCountry: '',
};

const mapStateToProps = (state) => ({
  playlists: state.main.playlists,
  userCountry: state.main.userCountry,
});

const mapDispatchToProps = {
  getPlaylists: mainActions.getPlaylists,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsList);

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';

const PlaylistsList = ({ getPlaylists, playlists, history }) => {
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
      <h3>PlaylistsList</h3>
      {playlists.map((playlist) => (
        <h6
          key={playlist.id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleViewTrackList(playlist.id)}
        >
          {playlist.name}

        </h6>
      ))}
    </div>
  );
};

PlaylistsList.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,

  getPlaylists: PropTypes.func.isRequired,
  playlists: PropTypes.arrayOf(PropTypes.shape({})),
};

PlaylistsList.defaultProps = {
  playlists: [],
};

const mapStateToProps = (state) => ({
  playlists: state.main.playlists,
});

const mapDispatchToProps = {
  getPlaylists: mainActions.getPlaylists,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PlaylistsList);

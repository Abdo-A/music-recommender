import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';

const TracksList = ({
 getPlaylistTracks, currentPlaylistTracks, history, match,
}) => {
  useEffect(() => {
  const { playlistId } = match.params;
    getPlaylistTracks(playlistId);
  }, [getPlaylistTracks, match.params]);

  const handleViewTrack = (trackId) => {
    history.push(`/track/${trackId}`);
  };


  return (
    <div>
      <h3>TracksList</h3>
      {currentPlaylistTracks.map((track) => (
        <h6
          key={track.id}
          onClick={() => handleViewTrack(track.id)}
        >
          {track.name}

        </h6>
      ))}
    </div>
  );
};

TracksList.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,

  getPlaylistTracks: PropTypes.func.isRequired,
  currentPlaylistTracks: PropTypes.arrayOf(PropTypes.shape({})),
};

TracksList.defaultProps = {
  currentPlaylistTracks: [],
};

const mapStateToProps = (state) => ({
  currentPlaylistTracks: state.main.currentPlaylistTracks,
});

const mapDispatchToProps = {
  getPlaylistTracks: mainActions.getPlaylistTracks,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TracksList);

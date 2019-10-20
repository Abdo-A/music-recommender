import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';

const TracksList = ({
  getPlaylistTracks,
  setCurrentTrack,
  currentPlaylistTracks,
  chosenPlaylistId,
  history,
  match,
}) => {
  useEffect(() => {
    const { playlistId: urlPlaylistId } = match.params;
    if (!(urlPlaylistId === chosenPlaylistId && currentPlaylistTracks.length)) {
      getPlaylistTracks(urlPlaylistId);
    }
  }, [chosenPlaylistId, currentPlaylistTracks.length, getPlaylistTracks, match.params]);

  const handleViewTrack = (track) => {
    setCurrentTrack(track);
    history.push(`/track/${track.id}`);
  };

  return (
    <div>
      <h3>TracksList</h3>
      {currentPlaylistTracks.map((track) => (
        <h6
          key={track.id}
          style={{ cursor: 'pointer' }}
          onClick={() => handleViewTrack(track)}
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
  setCurrentTrack: PropTypes.func.isRequired,
  currentPlaylistTracks: PropTypes.arrayOf(PropTypes.shape({})),
  chosenPlaylistId: PropTypes.string,
};

TracksList.defaultProps = {
  currentPlaylistTracks: [],
  chosenPlaylistId: '',
};

const mapStateToProps = (state) => ({
  currentPlaylistTracks: state.main.currentPlaylistTracks,
  chosenPlaylistId: state.main.chosenPlaylistId,
});

const mapDispatchToProps = {
  getPlaylistTracks: mainActions.getPlaylistTracks,
  setCurrentTrack: mainActions.setCurrentTrack,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TracksList);

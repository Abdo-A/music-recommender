import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import { Badge } from 'antd';
import * as mainActions from '../../store/actions/mainActions';
import Track from '../../components/track';

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

  const handleClickBack = () => {
    history.replace('/');
  };

  return (
    <div>
      <Badge count={<span>&larr;</span>} style={{ backgroundColor: '#52c41a', color: 'white', cursor: 'pointer' }} onClick={handleClickBack} />
      <h3>Tracks List</h3>
      {currentPlaylistTracks.map((track) => (
        <Track
          key={track.id}
          track={track}
          onClick={() => handleViewTrack(track)}
        />
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

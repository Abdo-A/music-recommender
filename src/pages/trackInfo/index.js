import { Badge } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';
import Track from '../../components/track';

const TrackInfo = ({
 track, chosenPlaylistId, getTrack, history, match,
}) => {
  useEffect(() => {
    const { trackId: urlTrackId } = match.params;
    if (urlTrackId !== track.id) {
      getTrack(urlTrackId);
    }
  }, [getTrack, match.params, track.id]);

  const handleClickBack = () => {
    history.replace(`/playlist/${chosenPlaylistId}`);
  };

  return (
    <div>
      {chosenPlaylistId && <Badge count={<span>&larr;</span>} style={{ backgroundColor: '#52c41a', color: 'white', cursor: 'pointer' }} onClick={handleClickBack} />}
      <h3>Track Info</h3>
      <Track
        key={track.id}
        track={track}
        showAllInfo
      />
    </div>
  );
};

TrackInfo.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,

  track: PropTypes.objectOf(PropTypes.any),
  getTrack: PropTypes.func,
  chosenPlaylistId: PropTypes.string,
};

TrackInfo.defaultProps = {
  track: {},
  getTrack: () => null,
  chosenPlaylistId: '',
};


const mapStateToProps = (state) => ({
  track: state.main.currentTrack,
  chosenPlaylistId: state.main.chosenPlaylistId,
});

const mapDispatchToProps = {
  getTrack: mainActions.getTrack,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackInfo);

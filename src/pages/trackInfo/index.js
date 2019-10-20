import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';

const TrackInfo = ({ track, getTrack, match }) => {
  useEffect(() => {
    const { trackId: selectedTrackId } = match.params;
    if (selectedTrackId !== track.id) {
      getTrack(selectedTrackId);
    }
  }, [getTrack, match.params, track.id]);

  return (
    <div>
      <h3>TrackInfo</h3>
      <h6>{track.name}</h6>
    </div>
  );
};

TrackInfo.propTypes = {
  track: PropTypes.objectOf(PropTypes.any),
  getTrack: PropTypes.func,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

TrackInfo.defaultProps = {
  track: {},
  getTrack: () => null,
};


const mapStateToProps = (state) => ({
  track: state.main.currentTrack,
});

const mapDispatchToProps = {
  getTrack: mainActions.getTrack,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TrackInfo);

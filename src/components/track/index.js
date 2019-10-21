import { Card, Badge } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import truncate from '../utils/truncate';

import musicImg from '../../assets/images/musicImg.jpg';

const Track = ({ track, onClick }) => {
  let artistName = '';
  if (track.artists && track.artists.length) {
    artistName = track.artists.reduce((acc, artist, index) => `${acc}${index !== 0 ? ' & ' : ''}${artist.name}`, '');
  }
  const imageUrl = track.album
                  && track.album.images
                  && track.album.images[0]
                  && track.album.images[0].url;
  const { popularity } = track;

  return (
    <Card
      hoverable
      style={{
          width: '40vw', minWidth: 260, margin: '40px auto', cursor: 'initial',
       }}
      bodyStyle={{ padding: 0 }}
    >
      <span style={{ display: 'flex', justifyContent: 'space-between' }}>
        <img alt="music" src={imageUrl || musicImg} onClick={onClick} style={{ cursor: 'pointer', width: 100 }} />
        <span style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-end', alignSelf: 'center', margin: 20,
        }}
        >
          <h4 onClick={onClick} style={{ cursor: 'pointer' }}>{truncate(track.name, 30)}</h4>
          {artistName && <h5>{truncate(artistName, 40)}</h5>}
          <span style={{ display: 'flex' }}>
            {popularity && <Badge count={`Popularity: ${popularity}`} style={{ backgroundColor: '#52c41a', marginRight: 10 }} />}
            <u onClick={onClick} style={{ cursor: 'pointer' }}>View track</u>
          </span>
        </span>
      </span>
    </Card>
  );
};

Track.propTypes = {
  track: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
};

Track.defaultProps = {
  track: {},
  onClick: () => null,
};

export default Track;

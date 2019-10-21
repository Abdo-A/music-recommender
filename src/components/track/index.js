import { Card, Badge } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import msToMinutes from '../utils/msToMinutes';
import truncate from '../utils/truncate';

import musicImg from '../../assets/images/musicImg.jpg';

const Track = ({ track, onClick, showAllInfo }) => {
  console.log(track);
  const {
    popularity, name, album, artists, duration_ms: durationMs,
  } = track;

  let artistName = '';
  if (artists && artists.length) {
    artistName = artists.reduce((acc, artist, index) => `${acc}${index !== 0 ? ' & ' : ''}${artist.name}`, '');
  }
  const imageUrl = album
                  && album.images
                  && album.images[0]
                  && album.images[0].url;
  const albumName = album && album.name;

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
          {name && <h4 onClick={onClick} style={{ cursor: 'pointer' }}>{truncate(track.name, 30)}</h4>}
          {artistName && <h5>{truncate(artistName, 40)}</h5>}
          <span style={{ display: 'flex' }}>
            {popularity && <Badge count={`Popularity: ${popularity}`} style={{ backgroundColor: '#52c41a', marginRight: 10 }} />}
            <u onClick={onClick} style={{ cursor: 'pointer' }}>View track</u>
          </span>
        </span>
      </span>
      {
        showAllInfo && (
          <div style={{ margin: 20 }}>
            {albumName && <Badge count={`Album: ${albumName}`} style={{ backgroundColor: '#b9a6a7', marginRight: 10 }} />}
            {durationMs && <Badge count={`Duration ${msToMinutes(durationMs)}`} style={{ backgroundColor: '#b9a6a7', marginRight: 10 }} />}
          </div>
        )
      }
    </Card>
  );
};

Track.propTypes = {
  track: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
  showAllInfo: PropTypes.bool,
};

Track.defaultProps = {
  track: {},
  onClick: () => null,
  showAllInfo: false,
};

export default Track;

import { Card, Badge } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import musicImg from '../../assets/images/musicImg.jpg';

const { Meta } = Card;

const Playlist = ({ playlist, onClick }) => {
  const imageUrl = playlist.images && playlist.images[0] && playlist.images[0].url;
  const externalUrl = playlist.external_urls && playlist.external_urls.spotify;
  const numberOfTracks = playlist.tracks && playlist.tracks.total;

  return (
    <Card
      hoverable
      style={{
          width: '25vw', minWidth: 240, margin: '40px auto', cursor: 'initial',
       }}
      cover={<img alt="example" src={imageUrl || musicImg} onClick={onClick} style={{ cursor: 'pointer' }} />}
    >
      <Meta title={playlist.name} />
      {/* <p style={{ textAlign: 'end' }}>{`${numberOfTracks} tracks`}</p> */}
      <span style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 20 }}>
        <Badge count={`${numberOfTracks} tracks`} style={{ backgroundColor: '#52c41a' }} />
      </span>
      <span style={{ display: 'flex', justifyContent: 'space-between', margin: 20 }}>
        {externalUrl && <a href={externalUrl} target="_blank" rel="noopener noreferrer">Listen</a>}
        <u onClick={onClick} style={{ cursor: 'pointer' }}>View tracks</u>
      </span>
    </Card>
  );
};

Playlist.propTypes = {
  playlist: PropTypes.objectOf(PropTypes.any),
  onClick: PropTypes.func,
};

Playlist.defaultProps = {
  playlist: {},
  onClick: () => null,
};

export default Playlist;

import { Card, Badge } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import useStyles from './style';

import musicImg from '../../assets/images/musicImg.jpg';

const { Meta } = Card;

const Playlist = ({ playlist, onClick }) => {
  const imageUrl = playlist.images && playlist.images[0] && playlist.images[0].url;
  const externalUrl = playlist.external_urls && playlist.external_urls.spotify;
  const numberOfTracks = playlist.tracks && playlist.tracks.total;

  const classes = useStyles();

  return (
    <Card
      hoverable
      className={classes.container}
      cover={
        <img
          alt="example"
          src={imageUrl || musicImg}
          onClick={onClick}
          style={{ cursor: 'pointer' }}
        />
      }
    >
      <Meta title={playlist.name} />
      <span className={classes.tracksBadgeContainer}>
        <Badge
          count={`${numberOfTracks} tracks`}
          style={{ backgroundColor: '#52c41a' }}
        />
      </span>
      <span className={classes.lastRow}>
        {externalUrl && (
          <a href={externalUrl} target="_blank" rel="noopener noreferrer">
            Listen
          </a>
        )}
        <u onClick={onClick} className={classes.pointer}>
          View tracks
        </u>
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

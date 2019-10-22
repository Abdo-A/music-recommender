import { Card, Badge } from 'antd';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import msToMinutes from '../utils/msToMinutes';
import truncate from '../utils/truncate';
import useStyles from './style';

import musicImg from '../../assets/images/musicImg.jpg';

const Track = ({ track, onClick, showAllInfo }) => {
  const [audioPaused, setAudioPaused] = useState(true);

  const audioElement = useRef(null);

  const classes = useStyles();

  const {
    popularity,
    name,
    album,
    artists,
    duration_ms: durationMs,
    preview_url: audio,
  } = track;

  let artistName = '';
  if (artists && artists.length) {
    artistName = artists.reduce(
      (acc, artist, index) => `${acc}${index !== 0 ? ' & ' : ''}${artist.name}`,
      '',
    );
  }
  const imageUrl = album && album.images && album.images[0] && album.images[0].url;
  const albumName = album && album.name;

  const playAudio = () => {
    setAudioPaused(!audioElement.current.paused);

    if (audioElement.current.duration > 0 && !audioElement.current.paused) {
      audioElement.current.pause();
      audioElement.current.currentTime = 0;
    } else {
      audioElement.current.play();
    }
  };

  return (
    <Card hoverable className={classes.container} bodyStyle={{ padding: 0 }}>
      <span className={classes.innerContainer}>
        <img
          alt="music"
          src={imageUrl || musicImg}
          onClick={onClick}
          className={classes.img}
        />
        {showAllInfo && audio && (
          <>
            <span
              onClick={playAudio}
              className={classes.audioControlIconContainer}
              role="img"
              aria-label="play"
              title="Preview Audio"
            >
              {audioPaused ? '️▶️' : '⏸️'}
            </span>
            <audio ref={audioElement} id="audio">
              <source src={audio} />
            </audio>
          </>
        )}

        <span className={classes.basicInfoContainer}>
          {name && (
            <h4 onClick={onClick} style={{ cursor: 'pointer' }}>
              {truncate(track.name, 30)}
            </h4>
          )}
          {artistName && <h5>{truncate(artistName, 40)}</h5>}
          {!showAllInfo && (
            <span className={classes.flex}>
              {popularity && (
                <Badge
                  count={`Popularity: ${popularity}`}
                  style={{ backgroundColor: '#52c41a', marginRight: 10 }}
                />
              )}
              <u onClick={onClick} className={classes.pointer}>
                View track
              </u>
            </span>
          )}
        </span>
      </span>
      {showAllInfo && (
        <div style={{ margin: 20 }}>
          {albumName && (
            <Badge
              count={`Album: ${albumName}`}
              style={{ backgroundColor: '#b9a6a7', marginRight: 10 }}
            />
          )}
          {durationMs && (
            <Badge
              count={`Duration ${msToMinutes(durationMs)}`}
              style={{ backgroundColor: '#673AB7', marginRight: 10 }}
            />
          )}
          {popularity && (
            <Badge
              count={`Popularity: ${popularity}`}
              style={{ backgroundColor: '#52c41a', marginRight: 10 }}
            />
          )}
        </div>
      )}
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

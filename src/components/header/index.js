import { useTheme } from 'react-jss';
import React from 'react';

import useStyles from './style';

const Header = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <h1 className={classes.mainTitle}>Spotify Music Recommender</h1>;
};

export default Header;

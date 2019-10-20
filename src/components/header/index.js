import { Link } from 'react-router-dom';
import { useTheme } from 'react-jss';
import React from 'react';

import useStyles from './style';

const Header = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  return <Link to="/" className={classes.titleWrapper}><h1 className={classes.mainTitle}>Spotify Music Recommender</h1></Link>;
};

export default Header;

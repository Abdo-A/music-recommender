import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';
import useStyles from './style';

const Header = ({ error, setError }) => {
  useEffect(() => {
    // Handle show error
    if (error) {
      notification.error({ message: error, duration: 2 });
      setError('');
    }
  }, [error, setError]);

  const theme = useTheme();
  const classes = useStyles({ theme });

  return (
    <Link to="/" className={classes.titleWrapper}>
      <h1 className={classes.mainTitle}>Spotify Music Recommender</h1>
    </Link>
);
};

Header.propTypes = {
  error: PropTypes.string,
  setError: PropTypes.func,
};

Header.defaultProps = {
  error: '',
  setError: () => null,
};


const mapStateToProps = (state) => ({
  error: state.main.error,
});

const mapDispatchToProps = {
  setError: mainActions.setError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Spin, notification } from 'antd';
import { useTheme } from 'react-jss';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as mainActions from '../../store/actions/mainActions';
import useStyles from './style';

const Header = ({ error, isLoading, setError }) => {
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
    <div>
      <Link to="/" className={classes.titleWrapper}>
        <h1 className={classes.mainTitle}>Spotify Music Recommender</h1>
      </Link>
      {
        isLoading
        && (
        <span className={classes.loadingOverlay}>
          <Spin size="large" color="red" tip="Loading..." />
        </span>
        )
      }
    </div>
);
};

Header.propTypes = {
  error: PropTypes.string,
  isLoading: PropTypes.bool,
  setError: PropTypes.func,
};

Header.defaultProps = {
  error: '',
  isLoading: false,
  setError: () => null,
};


const mapStateToProps = (state) => ({
  error: state.main.error,
  isLoading: state.main.isLoading,
});

const mapDispatchToProps = {
  setError: mainActions.setError,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

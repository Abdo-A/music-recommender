import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '25vw',
    minWidth: 240,
    margin: '40px auto',
    cursor: 'initial',
  },
  tracksBadgeContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 20,
  },
  lastRow: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: 20,
  },
  pointer: {
    cursor: 'pointer',
  },
});

export default useStyles;

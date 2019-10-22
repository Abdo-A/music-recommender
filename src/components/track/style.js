import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    width: '40vw',
    minWidth: 260,
    margin: '40px auto',
    cursor: 'initial',
  },
  innerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  img: {
    cursor: 'pointer',
    width: 100,
  },
  audioControlIconContainer: {
    fontSize: 30,
    cursor: 'pointer',
    alignSelf: 'center',
    userSelect: 'none',
  },
  basicInfoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    alignSelf: 'center',
    margin: 20,
  },
  flex: {
    display: 'flex',
  },
  pointer: {
    cursor: 'pointer',
  },
});

export default useStyles;

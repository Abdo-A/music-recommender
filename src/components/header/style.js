import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainTitle: {
    fontFamily: 'Mansalva, cursive',
    color: ({ theme }) => theme.colors.primary,
    background: ({ theme }) => theme.colors.black,
  },

  titleWrapper: {
    color: 'inherit',
    textDecoration: 'inherit',
  },

  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100vh',
    width: '100vw',
    background: '#0000007a',
    zIndex: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default useStyles;

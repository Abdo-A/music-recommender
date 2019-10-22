import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  link: {
    color: 'inherit',
    textDecoration: 'inherit',
  },
  titleContainer: {
    background: ({ theme }) => theme.colors.black,
  },
  mainTitle: {
    fontFamily: 'Mansalva, cursive',
    color: ({ theme }) => theme.colors.primary,
  },
  hint: {
    color: ({ theme }) => theme.colors.secondary,
    fontSize: 12,
    padding: 10,
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

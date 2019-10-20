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
});

export default useStyles;

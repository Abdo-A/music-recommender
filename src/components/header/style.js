import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  mainTitle: {
    fontFamily: 'Mansalva, cursive',
    color: ({ theme }) => theme.colors.primary,
    background: ({ theme }) => theme.colors.black,
  },
});

export default useStyles;

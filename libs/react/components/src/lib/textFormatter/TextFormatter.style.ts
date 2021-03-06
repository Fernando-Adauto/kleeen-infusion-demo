import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: ({ textAlignment }: { textAlignment: 'center' | 'left' | 'flex-end' }) => textAlignment,
  },
});

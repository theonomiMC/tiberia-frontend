import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '5em',
    display: 'block',
    textAlign: 'center',
    padding: '4em 0',
    color: 'white',

    backgroundColor: '#24252f',
    "& a": {
      color: 'White',
      cursor: 'pointer'
    },
    "& .MuiPaper-root.MuiAppBar-root": {
      backgroundColor: '#24252f',
    },
    '& svg': {
      fontSize: '1.2rem',
    },
  }
}));
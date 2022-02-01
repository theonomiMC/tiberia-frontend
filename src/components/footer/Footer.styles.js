import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '20em',
    display: 'block',
    position: 'relative',
    textAlign:'center',
    padding:'4em 0',
    color: 'white',

    backgroundColor: '#24252f',
    "& a": {
      color: 'White',
      cursor: 'pointer'
    },
    "& .MuiPaper-root.MuiAppBar-root": {
      backgroundColor: '#24252f',
    },
    
  topbar: {
    '& div': {
      fontSize: '13px',
    },
    '& svg': {
      fontSize: '1.2rem',
    },
  },
}
}));
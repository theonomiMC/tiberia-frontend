import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: 'white',
    margin: 0,
    // marginBottom:'4em',
    "& a": {
      color: 'White',
      cursor: 'pointer'
    },
    "& .MuiAppBar-root": {
      backgroundColor: '#24252f',
      display: 'block',
      position: 'relative',
      color: 'white',
    },
    "& .MuiToolbar-root": {
      width: '100%',
      maxWidth: '1024px',
      margin: '0 auto',
      paddingLeft: 0,
      paddingRight: 0,
      '@media all': {
        minHeight: 'auto',
      },
    },

  },
  topbar: {
    '& div': {
      fontSize: '13px',
    },
    '& svg': {
      fontSize: '1.2rem',
    },
  },
  middlebar: {
    padding: '1.2em 0',
    borderBottom: '1px solid #e7e7e7',
    "& h1": {
      fontSize: '4rem',
      fontWeight: 700,
      textShadow:'-1px -2px white, -3px 2px grey',
      color:'#201e1e', 
      "&::first-letter":{
        color:'#FFC600', 
        fontSize:'5.5rem', 
        textShadow:'-1px -2px white, -3px 2px grey'
      },
      "@media (max-width:600px)": {
        fontSize:'3rem',
        "&::first-letter":{
          fontSize:'4.4rem',
        } 
    },
    }
  },
  bottomBar: {
    '& ul': {
      margin: '2px auto',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      // marginRight:'1em',
      '& li': {
        borderLeft: '1px solid #e7e7e7',
        padding: '.5em .8em',
        '& a': {
          color: '#24252f',
          fontSize: '.9rem',
          fontWeight: 600,
          '&:hover': {
            color: '#d60000'
          },
        },

        '&:last-child': {
          borderRight: '1px solid #e7e7e7'
        },

      },

    },

  }
}));
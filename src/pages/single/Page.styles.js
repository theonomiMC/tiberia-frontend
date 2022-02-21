import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        display: 'flex',
        maxWidth: 1024,
        minHeight: '100vh',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: '4em',
        "& .MuiTypography-root.MuiTypography-h1": {
            fontSize: '2rem',
        },
        "& img": {
            width: '100%',
            maxHeight: 500,
            objectFit: 'cover',
            objectPosition: '0 0'
        },
        "& a": {
            color: '#086d5c'
        }
    },
    bottomCenter: {
        position: 'absolute',
        width: '100%',
        top: '70%',
        left: 0,
        right: 0,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
        background: '#edeff4',
        "& span":{
            display:'block',
            color: '#777',
            fontStyle: 'oblique',
            letterSpacing:1.3,
        },
        "& h1": {
            padding: '1em',
        },
        "@media (min-width:900px)": {
            width: '70%',
        },
    },
    pageContent: {
        position: 'absolute',
        padding: '1em',
        width: '70%',
        zIndex: 12,
        textAlign: 'center',
       
        "& img": {
            display: 'block',
            margin: '0 auto',
            width: 'auto',
            maxWidth: 900,
            maxHeight: 500,
            objectFit: 'cover',
            objectPosition: '0 0'
        }
    }

});
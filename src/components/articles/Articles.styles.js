import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        marginBottom: '1em',
        
        "& a": {
            color: 'black',
            "&:visited": {
                color: '#272727',
            },
        },
        "& hr:last-child": {
            borderBottom: 'none',
        },
        "& .MuiTypography-root.MuiTypography-caption": {
            fontSize: '0.7rem',
            fontStyle: 'italic',
            color: '#9a9a9a',
        },
        "& .MuiButtonBase-root.MuiPaginationItem-root.Mui-selected":{
            color:'#d60000'
        },
        "@media (min-width:900px)": {
            width: '72%',
            flexDirection: 'row'
        },
        "@media (min-width:600px)": {

            flexDirection: 'row'
        },
    },
    content: {
        display: 'flex',
        padding: '1em',
        minWidth:230,
        flexDirection: 'row-reverse',
        marginBottom: '.7em',
        "& img": {
            height: 60,
            width: 70,
            objectFit: 'cover'
        },
        
    },
    bigContent: {
        width: '95%',
        textAlign: 'right',
        padding: '1em',
        "& img": {
            height: 178,
            width: '100%',
            objectFit: 'cover'
        },
        "& p": {
            color: '#777',
        },
        "@media (min-width:900px)": {
            width: '93%',
        },
    }
});
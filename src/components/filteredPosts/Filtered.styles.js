import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        backgroundColor: 'white',
        width: '100%',
        "& a": {
            color: 'black',
            "&:visited": {
                color: '#272727',
            },
        },
        "& .MuiPagination-root": {
            margin: '1.5em auto',
        },
        "& .MuiPagination-ul": {
            justifyContent: 'center',
        },
        "& .MuiTypography-root.MuiTypography-caption": {
            fontSize: '0.7rem',
            fontStyle: 'italic',
            color: '#9a9a9a',
        },
        "@media (min-width:900px)": {
            width: '72%',
            flexDirection: 'row'
        },
    },
    bigContent: {
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',

        alignItems: 'center',
        "& > div": {
            width: '90%',
            maxWidth: 350,
            borderBottom: '1px solid #d9d9d9',
        },
        "& img": {
            height: 150,
            width: '100%',
            maxWidth: 350,
            objectFit: 'cover',
            marginBottom: '1em',
        },

    }
});
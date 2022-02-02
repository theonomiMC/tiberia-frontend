import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        width: '100%',
        marginBottom: '.5em',

        "& .MuiChip-root": {
            margin: '.5em',
           
        },
        "& .MuiChip-label": {
            // textShadow:'0px 0px 1px rgba(0,0,0)'
            
        },
        "& > div": {
            padding: '1em',
            marginBottom: '.5em',
            backgroundColor: 'white',
            fontSize: '.8rem',
            "& h2": {
                fontWeight: 'bold',
                paddingBottom: '0.5em'
            }
        },
        "@media (min-width:900px)": {
            width: '27%',
        },
    },

});
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: 300,
        "& .MuiTypography-root": {
            fontSize: '0.8rem',
            color: '#777',
            
        },
        "& .MuiGrid-item": {
            display: 'flex',
            width: '70%',
            justifyContent: 'space-between',      
            "& div > p:last-child":{
                color:'#424242',
                fontWeight: '700',
            }
        }

    },
});
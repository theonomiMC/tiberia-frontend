import { makeStyles } from '@mui/styles'
import { padding } from '@mui/system'

export const useStyles = makeStyles({
    root: {
        '& .MuiInput-underline:after': {
            borderBottomColor: '#132e37',
        },
        '& .MuiInput-underline:before': {
            borderBottomColor: '#ccc',
        },
        '& .MuiOutlinedInput-root': {
            borderBottomColor: '#132e37',
            '&.Mui-focused fieldset': {
                borderColor: '#132e37',
            },
        },
   
        '& .MuiBox-root': {
            display: 'flex',
            flexDirection: 'column',

        }
    },
    label: {
        display: 'flex',
        alignItems: 'center',
        padding: '1em 0',
        '& svg':{
            cursor:'pointer',
        }
    }
})
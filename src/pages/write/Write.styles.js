import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    root: {
        // width: '100%',
        // marginY: '5rem',
        // minHeight: '100vh'
        "& .MuiInputBase-input,MuiInput-input::placeholder": {
            color: 'black', 
            fontStyle:'italic',
            fontWeight:700
        }
    }
})
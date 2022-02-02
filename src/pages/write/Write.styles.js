import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
    root: {
      
        "& .MuiInputBase-input,MuiInput-input::placeholder": {
            color: 'black', 
            fontStyle:'italic',
            fontWeight:700
        }
    }
})
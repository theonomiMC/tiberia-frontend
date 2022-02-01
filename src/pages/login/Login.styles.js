import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles({
    root: {
        "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
            color: '#122030'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#132e37',
        },
        '& .MuiOutlinedInput-root': {
            '&.Mui-focused fieldset': {
                borderColor: '#132e37',
            },
        },
        "& .MuiButtonBase-root.MuiButton-root": {
            backgroundColor: '#122030',
            "&:hover": {
                backgroundColor: '#1a2e46'
            },
            "&:active": {
                backgroundColor: '#1a2e46'
            },
        }
    }

});
import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  root: {
    position: 'fixed',
    bottom: 16,
    right: 16,
    borderRadius: '50%',
    '& .MuiButtonBase-root.MuiFab-root': {
      background: '#24252f',
      '& svg':{
        color:'#ffc706',
      },
      '&:hover': {
        boxShadow: ' 0 0 0 3px #ffc706',       
      },
    }
  }
})
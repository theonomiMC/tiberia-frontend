import CircularProgress from '@mui/material/CircularProgress';
import Stack from '@mui/material/Stack';

const Loader = () => (
    <Stack sx={{
        width: '100%', 
        position: 'fixed',
        top: '40vh',
        left: 0,
        zIndex: 1301,
    }} spacing={2}>
        <CircularProgress sx={{margin:'0 auto'}} color="inherit" />
    </Stack>
);

export default Loader;
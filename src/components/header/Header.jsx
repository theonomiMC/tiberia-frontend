import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import ButtonGroup from '@mui/material/ButtonGroup';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// social icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useStyles } from './Header.styles';

const Header = () => {
    const { auth, dispatch } = useContext(AuthContext)
    const classes = useStyles()
    const handleLogOut = () => {
        dispatch({ type: "LOGOUT" });
    }
    return (
        <header className={classes.root}>

            <Box sx={{ flexGrow: 1 }} >
            {/* Top header with authorization and contact links */}
                <AppBar position="static">
                    <Toolbar className={classes.topbar}>
                        {auth ? <div style={{ flexGrow: 1 }}>
                            <Typography sx={{ fontSize: 13, cursor: 'pointer', marginLeft: '1em' }}
                                onClick={handleLogOut}>Sign Out</Typography>
                        </div> :
                            (
                                <Typography component='div' sx={{ flexGrow: 1, marginLeft: '1em' }}>
                                    <Link to='/login'>Login</Link>
                                    <IconButton
                                        size="large"
                                        edge="start"
                                        color="inherit"
                                        aria-label="login"
                                        sx={{ ml: '1px' }}

                                    >
                                        <LockOutlinedIcon />
                                    </IconButton>
                                </Typography>
                            )}

                        {auth?.success && <Typography component='div' sx={{
                            borderRight: '1px solid #6a6a70',
                            paddingRight: 2,
                        }}><Link to='/write-post'>Write Post</Link></Typography>}
                        <Typography component='div' sx={{
                            borderRight: '1px solid #6a6a70',
                            padding: '0 20px',
                        }}>Contact</Typography>
                        <ButtonGroup variant="text" aria-label="text button group">
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="login"
                                sx={{ ml: '1px' }}

                            >
                                <FacebookIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="login"
                            >
                                <TwitterIcon />
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="login"
                            >
                                <LinkedInIcon />
                            </IconButton>
                        </ButtonGroup>
                    </Toolbar>
                </AppBar>

                {/* Middle header with site title */}
                <Box className={classes.middlebar}>
                    <Toolbar>
                        <Typography variant='h1'>                    
                            <Link to='/' style={{ color: 'inherit' }}>TiBeria</Link>
                        </Typography>
                    </Toolbar>

                </Box>
                 {/* Bottom header menu items */}
                <Toolbar className={classes.bottomBar}>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/'>About Me</Link>
                        </li>
                        {/* <li>
                            <Link to='/all-news'>All News</Link>
                        </li> */}
                    </ul>
                </Toolbar>
            </Box>





        </header >
    )
}

export default Header

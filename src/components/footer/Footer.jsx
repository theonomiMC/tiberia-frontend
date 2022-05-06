import React from 'react'
import ButtonGroup from '@mui/material/ButtonGroup';
import IconButton from '@mui/material/IconButton';

// social icons
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useStyles } from './Footer.styles';
import { Typography } from '@mui/material';

const Footer = () => {
    const classes = useStyles()
    return (
        <footer className={classes.root}>

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
            <div style={{ margin: '.4em' }}>
                <Typography sx={{ fontFamily: 'Quintessential' }}><q>No great mind has ever existed without a touch of madness.</q></Typography>
                <Typography variant='body1'>― Aristotle</Typography>
                <Typography sx={{ 
                    marginTop: '1em', 
                    letterSpacing: 1.6,
                    fontFamily:'slick, cinzel',
                     }}>&copy;
                    {' '}
                    Tiberia{' '}{new Date().getFullYear()}
                </Typography>
            </div>

        </footer>


    )
}

export default Footer

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
            <Typography>“No great mind has ever existed without a touch of madness.”</Typography>
            <Typography variant='body2'>― Aristotle</Typography>
        </footer>


    )
}

export default Footer

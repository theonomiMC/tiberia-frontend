import React from 'react'
import { Box } from '@mui/material'
import Fab from '@mui/material/Fab';
import ArrowUpwardSharpIcon from '@mui/icons-material/ArrowUpwardSharp';
import { useStyles } from './Scroll.styles';

const ScrollTop = ({ mainRef }) => {
    const classes = useStyles()
    const toTop = () => {
        mainRef.current.scrollIntoView({
            behavior: 'smooth',
        })
    }
    return (
        <Box
            className={classes.root}
            onClick={toTop}
            role="scroll-to-top"        
        >
            <Fab size="small" aria-label="scroll to top">
                <ArrowUpwardSharpIcon />
            </Fab>
        </Box>
    )
}

export default ScrollTop
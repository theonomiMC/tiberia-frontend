import React, { memo } from 'react';
import Slide from '../slide/Slide'
import { Container } from "@mui/material";
import { useStyles } from './Dashboard.styles'


const Dashboard = memo(() => {
    const classes = useStyles()
    return (
        <Container disableGutters maxWidth='md' className={classes.root}>
            <Slide />
        </Container>


    );
});

export default Dashboard;

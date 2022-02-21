import React, { memo } from 'react';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import formatNumber from '../../utils';
import { useStyles } from './Covid.styles';


const CovidTimeline = memo(({ stat }) => {
    const classes = useStyles()

    return (
        <Grid container sx={{ '& *': { fontFamily: 'roboto' } }} spacing={2} className={classes.root}>
            {stat && <Grid item>
                <div>
                    <Typography>Total Cases:</Typography>
                    <Typography>
                        {formatNumber(stat?.confirmed)}
                    </Typography>
                </div>
                <div>
                    <Typography>Deaths:</Typography>
                    <Typography>
                        {formatNumber(stat?.deaths)}
                    </Typography>
                </div>
            </Grid>}
        </Grid >
    )
});

export default CovidTimeline;

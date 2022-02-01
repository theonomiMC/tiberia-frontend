import React from 'react';
import { useFetch } from '../../useFetch';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { formatNumber } from '../../utils';
import { useStyles } from './Covid.styles';

const GeorgiaCovidStats = 'https://corona-api.com/countries/ge'
const worldCovidApi = `https://corona-api.com/timeline`

const CovidTimeline = () => {
    const georgiaStats = useFetch(GeorgiaCovidStats)
    const worldStats = useFetch(worldCovidApi)
    const classes = useStyles()


    // console.log(georgiaStats, 'georgiaStats')
    // console.log(worldStats, 'worldStats')

    return (
        <Grid container sx={{ '& *': { fontFamily: 'roboto' } }} spacing={2} className={classes.root}>
            {georgiaStats.data && <Grid item>
                <div>
                    <Typography>Total Cases:</Typography>
                    <Typography>
                        {formatNumber(georgiaStats?.data?.timeline[0]?.confirmed)}
                    </Typography>
                </div>
                <div>
                    <Typography>Deaths:</Typography>
                    <Typography>
                        {formatNumber(georgiaStats?.data?.timeline[0]?.deaths)}
                    </Typography>
                </div>
            </Grid>}
            {worldStats.data && <Grid item>
                <div>
                    <Typography>Total Cases:</Typography>
                    <Typography>
                        {formatNumber(worldStats?.data[0]?.confirmed)}
                    </Typography>
                </div>
                <div>
                    <Typography>Deaths:</Typography>
                    <Typography>
                        {formatNumber(worldStats?.data[0]?.deaths)}
                    </Typography>
                </div>
            </Grid>}
        </Grid >
    )
};

export default CovidTimeline;

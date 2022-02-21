import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios'
import CategoryComponent from './CategoryComponent'
import { Box, Typography, Divider } from "@mui/material";
import CovidTimeline from '../covid/CovidTimeline';
import LanguageIcon from '@mui/icons-material/Language';
import { useStyles } from './Aside.styles'

// External covide APIs
const GeorgiaCovidStats = 'https://corona-api.com/countries/ge'
const worldCovidApi = `https://corona-api.com/timeline`


const Aside = () => {
  const [geoStats, setGeoStats] = useState([])
  const [worldStats, setWorldStats] = useState([])
  const classes = useStyles()

  const fetchGeoStats = useCallback(async () => {
    try {
      let { data: { data } } = await axios.get(GeorgiaCovidStats)
      setGeoStats(data)
    } catch (err) {
      console.log(err)
    }

  }, [])
  const fetchWorldStats = useCallback(async () => {
    try {
      let { data: { data } } = await axios.get(worldCovidApi)
      setWorldStats(data)
    } catch (err) {
      console.log(err)
    }

  }, [])

  useEffect(() => {

    fetchGeoStats()
    fetchWorldStats()
  }, [fetchGeoStats, fetchWorldStats])

  return (
    <Box className={classes.root}>
      {/* Categories from Server */}
      <CategoryComponent />
      {/* Quotes */}
      <div>
        <Typography component='h2'>Aphorism </Typography>
        <p style={{ lineHeight: 2, color: '#999', fontStyle: 'italic' }}>
          „ბოროტებას უყვარს პატიოსნება. უფრო სწორად, უყვარს პატიოსნების ნიღაბი.
          ამ ნიღბით იგი უფრო იოლად აკეთებს ავსა და უკეთურ საქმეს.
          მოხერხებულად აყრის საზოგადოებას თვალში ნაცარს.
          პატიოსნებას მიტმასნებული ბოროტების წინააღმდეგ ბრძოლა ძნელია.
          ადამიანს უჭირს გაარჩიოს, სად არის ხალასი პატიოსნება და სად – რიოში, ყალბი.“</p>
          <p style={{ color: '#777', fontStyle: 'italic' }}> - აკაკი ბაქრაძე</p>

      </div>
      {/* Covid19 Stats */}
      <div>
        <Typography component='h2' gutterBottom>Corona Viruse Cases</Typography>
        <img src='./assets/GeoFlag.png' alt='logo' className='flag' />
        {Object.keys(geoStats).length && <CovidTimeline stat={geoStats?.timeline[0]} />}
        <Divider flexItem sx={{ marginY: 2 }}></Divider>
        <LanguageIcon color="action" fontSize="large" sx={{ mb: '.2em' }} />
        {worldStats.length && <CovidTimeline stat={worldStats[0]} />}
      </div>

    </Box>
  )
};

export default Aside;

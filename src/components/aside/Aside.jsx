import React, { useState, useContext, useEffect, useCallback } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'
// import { useFetch } from '../../hooks/useFetch';
import { Box, Typography, Chip, Divider } from "@mui/material";
import CovidTimeline from '../covid/CovidTimeline';
import { useStyles } from './Aside.styles'
import LanguageIcon from '@mui/icons-material/Language';
// import { getUnique } from '../../utils';
const GeorgiaCovidStats = 'https://corona-api.com/countries/ge'
const worldCovidApi = `https://corona-api.com/timeline`

const Aside = () => {
  const [geoStats, setGeoStats] = useState([])
  const [worldStats, setWorldStats] = useState([])
  const [cats, setCats] = useState([])
  const { SERVER } = useContext(AuthContext)
  const navigate = useNavigate()
  const classes = useStyles()

  const fetchCategories = useCallback(async () => {
    try {
      let { data } = await axios.get(`${SERVER}/api/posts/cats`)
      setCats(data)
    } catch (err) {
      console.log(err)
    }

  }, [SERVER])
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
    fetchCategories()
    fetchGeoStats()
    fetchWorldStats()
  }, [fetchCategories, fetchGeoStats, fetchWorldStats])

  const moveToCategory = (value) => {
    if (value) {
      navigate(`/?category=${value}`)
    }
  }

  return (
    <Box className={classes.root}>
      <div>
        <Typography component='h2' gutterBottom>Categories</Typography>
        {
          cats.length > 0 && cats.map(cat =>
            <Chip key={cat}
              onClick={() => moveToCategory(cat)}
              label={cat} className={classes[`${cat}`]} variant='outlined' />
          )}
      </div>
      <div>
        <Typography component='h2'>Aphorism </Typography>
        <p style={{ lineHeight: 2, color: '#999', fontStyle: 'italic' }}>„არას გარგებს სიმძიმილი უსარგებლო ცრემლთა დენა;
          არ გარდავა გარდუვალად მომავალი საქმე ზენა;
          წესი არის მამაცისა მოჭირვება, ჭირთა თმენა,
          არვის ძალ-უც ხორციელსა განგებისა გარდავლენა.“</p>
      </div>
      <div>
        <Typography component='h2' gutterBottom>Corona Viruse Cases</Typography>
        <img src='./assets/GeoFlag.png' alt='logo' className='flag' />
        {/* <Typography component='span'>Georgia</Typography> */}
        {Object.keys(geoStats).length && <CovidTimeline stat={geoStats?.timeline[0]} />}
        <Divider flexItem sx={{ marginY: 2 }}></Divider>
        <LanguageIcon color="action" fontSize="large" sx={{ mb: '.2em' }} />
        {/* <Typography component='span'>Georgia</Typography> */}
        {worldStats.length && <CovidTimeline stat={worldStats[0]} />}
      </div>

    </Box>
  )
};

export default Aside;

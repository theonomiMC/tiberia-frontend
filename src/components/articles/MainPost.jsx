import React, { memo } from 'react'
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
import { Box, Divider, Typography } from "@mui/material";
import { truncate } from '../../utils';
import { useStyles } from './Articles.styles'


const MainPost = memo(({ mainPost }) => {
    const classes = useStyles()
    return (
        <>
            <Divider variant='middle' flexItem sx={{ marginLeft: 0 }} orientation={'vertical'} ></Divider>
            {
                <Box className={classes.bigContent}>
                    <img src={mainPost?.image} alt={`${mainPost?.title}`} />
                    <Box mr={1}>
                        <Typography variant="h6">
                            <Link to={`/${mainPost?._id}`}>{mainPost?.title}</Link>
                        </Typography>
                        <Typography variant="caption" component='div' sx={{ mb: 2, mt: 1 }}>
                            {new Date(mainPost?.updatedAt).toLocaleDateString()}
                        </Typography>
                        <Box sx={{
                            fontSize: '0.85rem',
                            fontWeight: 'normal',
                            color: '#757d89', lineHeight: 1.6
                        }}>{mainPost?.text && parse(truncate(mainPost?.text, 420))}</Box>
                    </Box>
                </Box>
            }
        </>

    )
})

export default MainPost
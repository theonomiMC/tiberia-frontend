import React from 'react'
import { Link } from 'react-router-dom'
import { getNextPage, getPrevPage } from '../utils'
import { Typography } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Navigations = ({ posts, currentIdx }) => {
    let nextPage = getNextPage(posts, currentIdx);
    let prevPage = getPrevPage(posts, currentIdx);
    return (
        <>
            {/* LEFT */}
            {prevPage && (
                <Link to={`/${prevPage._id}`}>
                    <div className="navigation left">
                        <div className='icon__wrapper'>
                            <ArrowBackIosIcon style={{ color: '#797a7b', marginLeft: '.1em' }} />
                        </div>
                        <div className='content'>
                            <Typography variant='caption'>{new Date(prevPage.createdAt).toDateString()}</Typography>
                            {prevPage.title}
                        </div>
                    </div>
                </Link>
            )}

            {/* RIGHT */}
            {nextPage && (
                <Link to={`/${nextPage._id}`}>
                    <div className="navigation right">
                        <div className='icon__wrapper' style={{ right: 0 }}>
                            <ArrowForwardIosIcon sx={{ color: '#797a7b' }} />
                        </div>
                        <div className='content'>
                            <Typography variant='caption'>{new Date(nextPage.createdAt).toDateString()}</Typography>
                            {nextPage.title}
                        </div>
                    </div>
                </Link>
            )}
        </>
    )
}

export default Navigations
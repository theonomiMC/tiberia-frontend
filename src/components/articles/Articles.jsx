import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import usePagination from '../../hooks/usePagination';
import MainPost from "./MainPost";
import { Box, Pagination, Divider, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './Articles.styles'

const Articles = ({ posts }) => {
    const classes = useStyles()
    const [page, setPage] = useState(1);
    const postsPerPage = 4
    const count = Math.ceil(posts.length / postsPerPage)
    const _POSTS = usePagination(posts.slice(4), postsPerPage)
    const boxRef = useRef(null)
    const handleChange = (e, p) => {
        setPage(p);
        _POSTS.customPage(p);
        boxRef.current.scrollIntoView()
    };

    if (!posts.length) {
        return <Box>
            <CircularProgress sx={{ margin: '5em auto', display: 'block' }} color='error' />
        </Box>
    }
    return (
        <Box className={classes.root} ref={boxRef}>
            <Box position='static' sx={{ xs: { width: '100%' }, md: { width: '50%' } }}>
                {_POSTS.currentData().length > 0 && (_POSTS.currentData().map(post => (
                    <React.Fragment key={post._id}>
                        <Box className={classes.content}>
                            <img src={post?.image} alt={`${post?.title}`} />
                            <Box mr={3} textAlign={'right'}>
                                <Typography sx={{ fontSize: '0.8rem' }}>
                                    <Link to={`/${post._id}`}>{post?.title}</Link>
                                </Typography>
                                <Typography variant="caption">
                                    {new Date(post?.updatedAt).toLocaleDateString()}
                                </Typography>
                            </Box>
                        </Box>
                        <Divider variant='middle'></Divider>
                    </React.Fragment>
                )))
                }
                {/* Pagination */}
                {posts.length > postsPerPage && (<Box className={classes.content}>
                    <Pagination
                        count={count}
                        page={page}
                        onChange={handleChange}
                    />
                </Box>)
                }
            </Box>
            {/* post on big boarder */}
            <MainPost mainPost={posts[3]} />
        </Box >
    )
};

export default Articles;

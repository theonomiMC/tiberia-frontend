import React, { useState } from "react";
import { Link } from 'react-router-dom';
import usePagination from '../../hooks/usePagination';
import parse from 'html-react-parser';
import { Box, Pagination, Divider, Typography } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import { useStyles } from './Articles.styles'


const truncate = (str, n) => {
    return str.length >= n ? str.substring(0, n) + ' ...' : str + ' ...'
}

const Articles = ({ posts }) => {
    const classes = useStyles()
    const [page, setPage] = useState(1);
    const postsPerPage = 4
    const count = Math.ceil(posts.length / postsPerPage)
    const _POSTS = usePagination(posts, postsPerPage)

    const handleChange = (e, p) => {
        setPage(p);
        _POSTS.customPage(p);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };

    if (!posts.length) {
        return <Box>
            <CircularProgress sx={{ margin: '5em auto', display: 'block' }} color='error' />
        </Box>
    }
    return (
        <Box className={classes.root}>
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
            <Divider variant='middle' flexItem sx={{ marginLeft: 0 }} orientation={'vertical'} ></Divider>
            {
                posts.length && <Box className={classes.bigContent}>
                    <img src={posts[0]?.image} alt={`${posts[0]?.title}`} />
                    <Box mr={1}>
                        <Typography variant="h6">
                            <Link to={`/${posts[0]?._id}`}>{posts[0]?.title}</Link>
                        </Typography>
                        <Typography variant="caption" component='div' sx={{ mb: 2, mt: 1 }}>
                            {new Date(posts[0]?.updatedAt).toLocaleDateString()}
                        </Typography>
                        <Box sx={{
                            fontSize: '0.85rem',
                            fontWeight: 'normal',
                            color: '#757d89', lineHeight: 1.6
                        }}>{posts[0]?.text && parse(truncate(posts[0]?.text, 420))}</Box>
                    </Box>
                </Box>
            }
        </Box >
    )
};

export default Articles;

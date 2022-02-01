import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import parse from 'html-react-parser';
// import { truncate } from '../../utils';
import usePagination from '../../hooks/usePagination';
import { Box, Pagination, Typography } from "@mui/material";
import { useStyles } from './Filtered.styles'


const truncate = (str, n) => {
    return str.length >= n ? str.substring(0, n) + ' ...' : str + ' ...'
}
const FilteredPosts = ({ posts }) => {
    const classes = useStyles()
    const [page, setPage] = useState(1);
    const postsPerPage = 3
    const count = Math.ceil(posts.length / postsPerPage)
    const _POSTS = usePagination(posts, postsPerPage)

    const handleChange = (e, p) => {
        setPage(p);
        _POSTS.customPage(p);
        window.scrollTo({ top: 0, behavior: 'smooth' })
    };
    return (
        <Box className={classes.root}>
            {_POSTS.currentData() && _POSTS.currentData().map(post => (
                <Box className={classes.bigContent} key={post._id}>
                    <img src={post?.image} alt={`${post?.title}`} />

                    <Box sx={{
                        "& *": {
                            fontSize: '0.85rem',
                            fontWeight: 'normal',
                            color: '#757d89', lineHeight: 1.6
                        }
                    }}>
                        <Typography variant="h6">
                            <Link to={`/${post?._id}`}>{post?.title}</Link>
                        </Typography>
                        <Typography variant="caption" >
                            <span></span>{new Date(post?.updatedAt).toLocaleDateString()}
                        </Typography>
                        {post?.text && parse(truncate(post?.text, 420))}
                    </Box>
                </Box>
            ))}
            {/* Pagination */}
            {posts.length > postsPerPage && < Box className={classes.content}>
                <Pagination
                    count={count}
                    page={page}
                    onChange={handleChange}
                />
            </Box>
            }
        </Box>
    )

};

export default FilteredPosts;

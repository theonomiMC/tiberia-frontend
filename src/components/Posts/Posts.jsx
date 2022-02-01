import React from 'react';
import Aside from '../aside/Aside';
import Articles from '../articles/Articles';
import FilteredPosts from '../filteredPosts/FilteredPosts';
import { Container } from "@mui/material";
import { useStyles } from './Posts.styles'

const Posts = ({ posts, search }) => {
    const classes = useStyles()

    return (
        <Container
            disableGutters
            sx={{
                display: 'flex',
                flexDirection: { md: 'row', xs: 'column-reverse' },
                justifyContent: 'space-between',
                // alignItems:'center'
            }}
            maxWidth='md' className={classes.root}>
            <Aside />
            
            {search ? <FilteredPosts posts={posts} />: <Articles posts={posts} />}
        </Container>
    );
};

export default Posts;

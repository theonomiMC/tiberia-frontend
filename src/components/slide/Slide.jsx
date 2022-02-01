import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import SliderComponent from './SliderCpmponent'
import { Typography, Divider, Chip } from '@mui/material';
import { useStyles } from './Slide.styles';

const Slide = () => {
    const { SERVER } = useContext(AuthContext)
    const [posts, setPosts] = useState([]);
    const classes = useStyles()
    useEffect(() => {
        const fetchPosts = async () => {
            const { data } = await axios.get(`${SERVER}/api/posts`);
            setPosts(data);
        };
        fetchPosts();
    }, [SERVER])
    return (
        <div className={classes.root}>
            <SliderComponent>
                {posts.length && posts.slice(0, 3).map(p => (
                    <div key={p._id}>
                        <img src={p?.image} alt={`${p?.title}`} />
                        <div className={classes.content}>
                            <Divider textAlign="right" sx={{ margin: '2em 0' }} >
                                <Chip label={p?.categories} sx={{ backgroundColor: '#d60000' }} />
                            </Divider>
                            <Typography variant='h2'>
                                <Link to={`/${p._id}`}>{p?.title}</Link>
                            </Typography>
                            <Typography variant='caption' className={classes.subtitle}>
                                {new Date(p.updatedAt).toDateString()} - Author: {p.author}
                            </Typography>
                        </div>
                    </div>
                ))}

            </SliderComponent>
        </div>

    )

};

export default Slide;

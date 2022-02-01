import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

import axios from 'axios'
import {
    Button,
    Container,
    Typography,
    Box,
    Input,
    Select,
    MenuItem
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Editor from '../../components/editor/Editor';
import { useStyles } from './Write.styles'

let categories = ["Art", 'Culture', 'Lifestyle', 'Health', "News", 'Travel', 'Photography']

const WritePost = () => {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [category, setCategory] = useState("")
    const { auth, SERVER } = useContext(AuthContext)
    const navigate = useNavigate()
    const [body, setBody] = useState({ value: null });
    const classes = useStyles()

    const handlePost = async (e) => {
        e.preventDefault();
        const newPost = {
            title,
            text: body.value,
            image,
            categories: category || 'News'
        }
        try {
            await axios.post(`${SERVER}/api/posts`, newPost, { headers: { "x-auth-token": `${auth.token}` } })
            navigate('/')
        } catch (err) {
            console.log(err.message)
        }

    }
    const handleBody = value => {
        setBody({ value });
    };
    return (
        <div className={`${classes.root} write-wrapper`}>
            <Container component="main" maxWidth="md" sx={{ backgroundColor: '#f1f1f1a8' }}>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',

                }}>
                    <Typography component="h1" variant="h5" marginY={'2em'} >
                        <span className='bigLetter'>W</span>rite something ...
                    </Typography>
                    <Box component="form" onSubmit={handlePost} sx={{ my: '2em', p: '1em' }}>
                        <Input
                            type='text'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            name="title"
                            required
                            fullWidth
                            placeholder="Post title"
                            sx={{ marginBottom: '1em' }}
                            disableUnderline
                            multiline
                        />
                        <Input
                            type='text'
                            value={image}
                            onChange={e => setImage(e.target.value)}
                            name="image"
                            sx={{ mb: '2em' }}
                            required
                            fullWidth
                            placeholder="Image address"
                            disableUnderline
                        />
                        <Select sx={{ mb: '1em', minWidth: 120, }}
                            labelId="category"
                            id="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            displayEmpty
                        >
                            <MenuItem value="">
                                <em>Category</em>
                            </MenuItem>
                            {categories.map(cat => <MenuItem key={cat} value={cat}>{cat}</MenuItem>)}

                        </Select>
                        {/* react quill text editor */}
                        <Editor onChange={handleBody} value={body.value} />
                        <Button
                            type='submit'
                            variant='contained'
                            sx={{ background: '#282828', '&:hover': { background: '#3c3c3c' } }}
                            endIcon={<SendIcon />}
                        >Publish</Button>
                    </Box>
                </Box>
            </Container>
        </div>
    )
}

export default WritePost

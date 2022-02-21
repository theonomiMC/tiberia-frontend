import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import FileUploadIcon from '@mui/icons-material/FileUpload';
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

import categories from '../../categories';

const WritePost = () => {
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")
    const [category, setCategory] = useState("")
    const { auth, SERVER } = useContext(AuthContext)
    const navigate = useNavigate()
    const [body, setBody] = useState({ value: null });
    const classes = useStyles()

    const handlePost = async (e) => {
        e.preventDefault();
        const imageData = new FormData()
        imageData.append('file', file)
        imageData.append('upload_preset', 'tiberia-assets')
        imageData.append('cloud_name', 'tiberiacloud')

        try {
            let res = await axios.post(
                "https://api.cloudinary.com/v1_1/tiberiacloud/upload",
                imageData
            )
            const { url } = res.data
            console.log(url)
            const newPost = {
                title,
                text: body.value,
                image: url,
                categories: category || 'News'
            }

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
                    alignItems: 'center'
                }}>
                    <Typography component="h1" variant="h5" marginY={'2em'} >
                        <span className='bigLetter'>W</span>rite something ...
                    </Typography>
                    <Box component="form"
                        onSubmit={handlePost}
                        sx={{
                            my: '2em', p: '1em',
                            alignItems: 'flex-start',
                        }}>
                        <Input
                            type='text'
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            name="title"
                            required
                            fullWidth
                            placeholder="Post title"
                            sx={{ marginBottom: '1em' }}

                        />

                        {/* Upload image to cloudinary */}

                        <Input
                            type='file'
                            accept="image/*"
                            onChange={e => setFile(e.target.files[0])}
                            id="upload-image"
                            sx={{ mb: '2em', display: 'none' }}
                            required

                        />
                        <div className={classes.label}>
                            <label htmlFor='upload-image' >
                                <FileUploadIcon fontSize='large' />
                            </label>
                            <span>{file?.name || 'Upload Image'}</span>
 
                        </div>
                        <Select sx={{ mb: '1em', border: 0, }}
                            labelId="category"
                            id="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            displayEmpty
                            size='small'
                            autoWidth
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

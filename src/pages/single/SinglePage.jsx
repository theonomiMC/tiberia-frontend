import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Container, Typography, Input, Select, MenuItem } from "@mui/material";
import { Box } from '@mui/system';
import parse from 'html-react-parser';
import Editor from '../../components/editor/Editor';
import { useStyles } from './Page.styles'
import EditButtons from '../../components/EditButtons';
import SettingsModal from '../../components/modal/SettingsModal';
import ActionBtns from '../../components/ActionBtns';
import CircularProgress from '@mui/material/CircularProgress';
import categories from '../../categories'
import Navigations from '../../components/Navigations';
import './SinglePage.css'

const SinglePage = () => {
  let { id } = useParams();
  const { auth, SERVER } = useContext(AuthContext)
  const navigate = useNavigate()
  const [singlePost, setSinglePost] = useState({})
  const [title, setTitle] = useState("");
  const [text, setText] = useState({ value: null });
  const [category, setCategory] = useState("")
  const [editMode, setEditMode] = useState(false);
  const [posts, setPosts] = useState([])

  let currentIdx = posts.findIndex(el => el.title === singlePost.title);
  const classes = useStyles()

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`${SERVER}/api/posts`);
      setPosts(data);
    };
    fetchPosts();
  }, [SERVER]);

  useEffect(() => {
    const getSinglePost = async () => {
      try {
        const { data } = await axios.get(`${SERVER}/api/posts/${id}`)
        setSinglePost(data)
        setTitle(data.title)
        setText({ value: data.text })
        setCategory(data.categories)
      } catch (err) {
        console.log(err.message)
      }
    }
    getSinglePost()
  }, [id, SERVER])

  // if page not found
  if (!Object.keys(singlePost).length) {
    return <Box>
      <CircularProgress sx={{ margin: '5em auto', display: 'block' }} color='error' />
    </Box>
  }

  const handleEdit = async () => {
    try {
      await axios.put(`${SERVER}/api/posts/${singlePost._id}`,
        { title, text: text.value, categories: category || 'News' },
        { headers: { "x-auth-token": `${auth.token}` } })
      await setEditMode(false)
      window.location.reload()
    } catch (err) {
      console.log(err.message)
    }
  }

  const handleDelete = async () => {
    try {
      await axios.delete(`${SERVER}/api/posts/${singlePost._id}`, { headers: { "x-auth-token": `${auth.token}` } })
      navigate('/')
    } catch (err) { }
  }


  return (
    <Container disableGutters className={classes.root} maxWidth={false}>

      <Box sx={{ position: 'relative' }}>
        <img src={singlePost.image} alt={singlePost.title} loading='lazy' />
        <Box className={classes.bottomCenter}>
          {editMode ? <Input
            type='text'
            multiline
            sx={{ p: '1em .5em', my: '1em', width: '95%' }}
            value={title}
            onChange={e => setTitle(e.target.value)} />
            :
            <Typography variant='h1' >{singlePost.title}</Typography>
          }
          {editMode && <Select sx={{ mb: '1em', minWidth: 120, }}
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
          }
          <Typography variant='caption'>
            {singlePost?.categories}
          </Typography>
          <Typography variant='caption'>
            {singlePost?.createdAt && new Date(singlePost?.createdAt).toLocaleDateString()}
          </Typography>
          <article className='article'>
            {
              editMode ? <Editor value={text.value} onChange={value => setText({ value })} /> :
                singlePost.text && parse(singlePost.text)
            }
            {/* Edid buttons */}
            {editMode && <EditButtons handleEdit={handleEdit} setEditMode={setEditMode} />}
          </article>
        </Box>
      </Box>

      {/* SETTINGS */}
      {
        auth && <>
          <SettingsModal>
            <ActionBtns handleDelete={handleDelete} setEditMode={setEditMode} />
          </SettingsModal>
        </>
      }
      {/* Left / Right Navigation Arrows */}
      <Navigations posts={posts} currentIdx={currentIdx} />
    </Container >
  )
};

export default SinglePage



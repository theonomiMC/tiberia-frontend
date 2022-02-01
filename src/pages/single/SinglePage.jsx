import React, { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import axios from 'axios'
import { Button, Container, Typography, Input, Select, MenuItem } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Box } from '@mui/system';
import parse from 'html-react-parser';
import Editor from '../../components/editor/Editor';
import { useStyles } from './Page.styles'
import './SinglePage.css'
// import { getNextPage, getPrevPage } from '../../utils'
import SettingsModal from '../../components/modal/SettingsModal';
import ActionBtns from '../../components/ActionBtns';
import CircularProgress from '@mui/material/CircularProgress';

let categories = ["Art", 'Culture', 'Lifestyle', 'Health', "News", 'Travel']

const getPrevPage = (data, currentIdx) => {
  let nextIdx = Math.min(currentIdx + 1, data.length - 1)
  return data[nextIdx]
}

const getNextPage = (data, currentIdx) => {
  let prevIdx = Math.max(currentIdx - 1, 0)
  return data[prevIdx]
}

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
  let nextPage = getNextPage(posts, currentIdx);
  let prevPage = getPrevPage(posts, currentIdx);

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
      await axios.put(`${SERVER}/api/posts/${singlePost._id}`, { title, text: text.value, categories: category || 'News' }, { headers: { "x-auth-token": `${auth.token}` } })
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
        <img src={singlePost.image} alt={singlePost.title} />
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
          <Typography variant='caption' sx={{ display: 'block' }}>Author: {singlePost?.author} - {singlePost?.createdAt && new Date(singlePost?.createdAt).toDateString()}</Typography>
          <article className='article'>
            {
              editMode ? <Editor value={text.value} onChange={value => setText({ value })} /> :
                singlePost.text && parse(singlePost.text)
            }
            {/* Edid buttons */}
            {editMode && <div className='settings-btns'>
              <Button color="success"

                variant='outlined'
                endIcon={<CheckIcon fontSize="inherit" />} aria-label="update" onClick={handleEdit} size="large">
                Update
              </Button>
              <Button color="error"
                variant='outlined'
                endIcon={<ClearIcon fontSize="inherit" />} aria-label="delete"
                onClick={() => setEditMode(false)}
                size="large"
              >
                Cencel
              </Button>
            </div>}
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
      {/* LEFT */}
      {prevPage && (
        <a href={`/${prevPage._id}`}>
          <div className="navigation left">
            <div className='icon__wrapper'>
              <ArrowBackIosIcon style={{ color: '#797a7b', marginLeft: '.1em' }} />
            </div>
            <div className='content'>
              <Typography variant='caption'>{new Date(prevPage.createdAt).toDateString()}</Typography>
              {prevPage.title}
            </div>
          </div>
        </a>
      )}

      {/* RIGHT */}
      {nextPage && (
        <a href={`/${nextPage._id}`}>
          <div className="navigation right">
            <div className='icon__wrapper' style={{ right: 0 }}>
              <ArrowForwardIosIcon sx={{ color: '#797a7b' }} />
            </div>
            <div className='content'>
              <Typography variant='caption'>{new Date(nextPage.createdAt).toDateString()}</Typography>
              {nextPage.title}
            </div>
          </div>
        </a>
      )}

    </Container >
  )
};

export default SinglePage



import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../../context/AuthContext'
import { Avatar, Button, Box, Typography, Container, TextField } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useStyles } from "./Login.styles";
import './login.css'


const Login = () => {
  const { dispatch, auth, SERVER } = useContext(AuthContext)
  const classes = useStyles()
  const navigate = useNavigate()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const res = await axios.post(`${SERVER}/api/auth/login`, {
        email: data.get('email'),
        password: data.get('password')
      })
      await dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
      navigate('/')
    } catch (err) {
      console.log(err.message)
      dispatch({ type: "LOGIN_FAILURE" })
    }

  };

  return (
    <div className={`${classes.root} login`}>
      <Container component="main" maxWidth="xs" sx={{ backgroundColor: '#f1f1f1a8' }}>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',

          }}
        >
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              disabled={auth?.success}
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              disabled={auth?.success}
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={auth?.success}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
      </Container>
    </div>
  )
}

export default Login

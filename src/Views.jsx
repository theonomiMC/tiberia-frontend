import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Write from './pages/write/WritePost'
import SinglePage from './pages/single/SinglePage'
import NoMatch from './pages/no-match/NoMatch'
import ProtectedRoutes from './ProtectedRoutes'

const Views = () => {
    return (
        <Routes>

            <Route index element={<Home />} />
            <Route path='/' element={<Home />} />
            <Route path=":id" element={<SinglePage />} />
            <Route element={<ProtectedRoutes />}>
                <Route path='/write-post' element={<Write />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<NoMatch />} />
        </Routes>
    )
}

export default Views

import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { AuthContext } from './context/AuthContext'


const ProtectedRoutes = () => {
    const { auth } = useContext(AuthContext)
    return auth ? <Outlet /> : <Navigate to='/' />
}

export default ProtectedRoutes

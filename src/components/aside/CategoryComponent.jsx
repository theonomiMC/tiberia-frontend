import React, { useState, useEffect, useCallback, useContext } from 'react'
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom';
import { Typography, Chip } from '@mui/material'

const CategoryComponent = () => {
    const { SERVER } = useContext(AuthContext)
    const [cats, setCats] = useState([])
    const navigate = useNavigate()

    const fetchCategories = useCallback(async () => {
        try {
            let { data } = await axios.get(`${SERVER}/api/posts/cats`)
            setCats(data)
        } catch (err) {
            console.log(err)
        }
    }, [SERVER])

    useEffect(() => {
        fetchCategories()
    }, [fetchCategories])

    const moveToCategory = (value) => {
        if (value) {
            navigate(`/?category=${value}`)
        }
    }
    if (!cats.length) {
        return <h3>...</h3>
    }
    return (
        <div>
            <Typography component='h2' gutterBottom>Categories</Typography>
            {
                cats.map(cat =>
                    <Chip key={cat}
                        onClick={() => moveToCategory(cat)}
                        label={cat} variant='outlined' />
                )}
        </div>
    )
}

export default CategoryComponent
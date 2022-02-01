import React, { useState } from 'react'
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import {Grow} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const icon = (
    <Paper sx={{ m: 1, zIndex:123, backgroundColor:'transparent'}} elevation={4}>
        <Box>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
            <IconButton aria-label="delete">
                <EditIcon />
            </IconButton>
        </Box>
    </Paper>
);

export default function Settings() {
    const [checked, setChecked] = useState(false);

    return (
        <Box>
            <Button onClick={() => setChecked(!checked)}>Hover</Button>
            <Box sx={{ display: 'flex' }}>
                <Grow in={checked}>{icon}</Grow>      
            </Box>
        </Box>
    );
}
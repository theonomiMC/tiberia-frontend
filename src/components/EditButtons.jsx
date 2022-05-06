import React from 'react'
import { Button } from "@mui/material";
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

const EditButtons = ({ handleEdit, setEditMode }) => {
    return (
        <div className='settings-btns'>
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
        </div>
    )
}

export default EditButtons
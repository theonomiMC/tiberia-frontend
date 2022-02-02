import React from 'react';
import UseAnimations from "react-useanimations";
import trash from 'react-useanimations/lib/trash'
import edit from 'react-useanimations/lib/edit'

const ActionBtns = ({ handleDelete, setEditMode, ...rest }) => {
    return (
        <>

            <UseAnimations
                aria-label="delete"
                autoFocus
                onClick={handleDelete}
                animation={trash}
                size={65}
                style={{ paddingLeft: 10, cursor:'pointer' }} {...rest} />

            <UseAnimations
                aria-label="edit"
                onClick={() => setEditMode(true)}
                autoFocus
                loop={true}
                animation={edit}
                autoplay={true}
                speed={.5}
                size={70}
                wrapperStyle={{ marginTop: '7px' }}
                style={{ paddingLeft: 10, cursor:'pointer' }} {...rest} />
        </>

    )
};

export default ActionBtns;

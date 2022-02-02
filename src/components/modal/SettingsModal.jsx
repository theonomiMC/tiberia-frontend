import * as React from 'react';
import Box from '@mui/material/Box';
import ConstructionIcon from '@mui/icons-material/Construction';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  display: 'flex',
  backgroundColor: 'rgba(255,255,255,50%)',
  borderRadius: '50%',
  justifyContent: 'center',
  p: 4,
  '& svg': {
    cursor: 'pointer',
  },
};

const SettingsModal = ({ children, ...rest }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <IconButton onClick={handleOpen} aria-label="settings" size="large">
        <ConstructionIcon fontSize="inherit" />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        {...rest}
      >
        <Box sx={style} onClick={handleClose}>
          {children}
        </Box>
      </Modal>
    </div>
  );
}

export default SettingsModal
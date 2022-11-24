import React, { SyntheticEvent, useState } from 'react';

import { Container, NewTrasactionButton } from './styles';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

import api from '../../api';

interface TransactionsModalProps {
  update: Function
}

const TransactionsModal: React.FC<TransactionsModalProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  const [transactionsData, setTransactionsData] = useState({
    creditedUsername: '',
    value: 0,
  });
  const [snackbarInfos, setSnackbarInfos] = useState({
    isOpen: false,
    message: '',
    type: '',
    hideDuration: 3000,
  });

  const handleChange = (event: any) => {
    setTransactionsData({
      ...transactionsData,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseSnackbar = (event?: SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') return;
    setSnackbarInfos({
      isOpen: false,
      message: '',
      type: 'error',
      hideDuration: 3000
    });
  };

  const onSubmit = (e: Event) => {
    e.preventDefault();
    api
        .post('/transactions/cash-out', transactionsData)
        .then((res) => {
          setSnackbarInfos({
            isOpen: true,
            message: res.data.message,
            type: 'sucess',
            hideDuration: 3000,
          });
          handleClose()
          props.update()
        })
        .catch((err) => {
          setSnackbarInfos({
            isOpen: true,
            message: err.response.data.error,
            type: 'error',
            hideDuration: 3000,
          });
        })
  };

  return (
    <Container>
      <NewTrasactionButton
        className="rainbow-background"
        onClick={handleClickOpen}
      >
        New Trasaction
      </NewTrasactionButton>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Transaction</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="username"
            name="creditedUsername"
            label="Username"
            type="text"
            fullWidth
            variant="standard"
            value={transactionsData.creditedUsername}
            onChange={(e) => handleChange(e)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="value"
            name="value"
            label="Value"
            type="number"
            fullWidth
            variant="standard"
            value={transactionsData.value}
            onChange={(e) => handleChange(e)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={(e: any) => onSubmit(e)}>Send</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={snackbarInfos.isOpen}
        autoHideDuration={snackbarInfos.hideDuration}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          variant="filled"
          severity={snackbarInfos.type === 'error' ? 'error' : 'success'}
          sx={{ width: '100%' }}
        >
          {snackbarInfos.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default TransactionsModal;

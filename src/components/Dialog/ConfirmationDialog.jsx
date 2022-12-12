import { forwardRef } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Loader from '../Loader/Loader';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide({ isOpen, title, description, handleClose, buttonText }) {

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        {title && <DialogTitle>{title}</DialogTitle>}
        <DialogContent>
          {description &&
            <DialogContentText id="alert-dialog-slide-description">
              {description}
            </DialogContentText>
          }
          {!description && <Loader />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>{buttonText}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
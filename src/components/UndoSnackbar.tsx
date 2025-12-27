import { Snackbar, Button } from '@mui/material';

interface Props {
  open: boolean;
  onClose: () => void;
  onUndo: () => void;
}

export default function UndoSnackbar({ open, onClose, onUndo }: Props) {
  return (
    <Snackbar
      open={open}
      autoHideDuration={4000}
      onClose={(_, reason) => {
        // Prevent accidental close from clickaway
        if (reason === 'clickaway') return;
        onClose();
      }}
      message="Task deleted"
      action={
        <Button
          color="secondary"
          size="small"
          onClick={(e) => {
            e.stopPropagation();
            onUndo();
          }}
        >
          Undo
        </Button>
      }
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    />
  );
}

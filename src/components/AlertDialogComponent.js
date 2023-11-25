import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
  Button,
  Box,
} from "@mui/material";
import React from "react";

const AlertDialogComponent = (props) => {
  const { title = "", message = "", open, setOpen, action = () => {} } = props;

  return (
    <Box
      onKeyUp={(event) => {
        if (event.key === "Enter") {
          setOpen(false);
          action();
        }
      }}
    >
      <Dialog
        onClose={() => {
          setOpen(false);
        }}
        open={open}
      >
        <DialogTitle
          onClose={() => {
            setOpen(false);
          }}
        >
          {title}
        </DialogTitle>

        <DialogContent>
          <Typography gutterBottom>{message}</Typography>
        </DialogContent>

        <DialogActions
          sx={{
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              setOpen(false);
              action();
            }}
          >
            확인
          </Button>

          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              setOpen(false);
            }}
          >
            취소
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AlertDialogComponent;

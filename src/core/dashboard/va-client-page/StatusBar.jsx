import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function StatusBar({
  open,
  close,
  message,
  priority,
  position
}) {
  return (
    <div>
      <Snackbar
        onClose={close}
        anchorOrigin={{ vertical: `bottom`, horizontal: position  }}
        open={open}
        autoHideDuration={4000}
      >
        <Alert severity={priority} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </div>
  );
}

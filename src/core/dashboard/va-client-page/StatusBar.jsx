import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

export default function SimpleSnackbar({ open, close }) {
  return (
    <div>
      <Snackbar
        onClose={close}
        anchorOrigin={{ vertical: `bottom`, horizontal: `right` }}
        open={open}
        autoHideDuration={4000}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          Internal Server Error!
        </Alert>
      </Snackbar>
    </div>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./TextInput.css";

export default function MultilineTextFields({ value, onChange }) {
  // const [value, setValue] = React.useState('Controlled');

  // const handleChange = (event) => {
  //   setValue(event.target.value);
  // };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" }
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="standard-multiline-flexible"
          placeholder="Type your messsage here..."
          multiline
          maxRows={4}
          value={value}
          onChange={onChange}
          variant="standard"
        />
      </div>
    </Box>
  );
}

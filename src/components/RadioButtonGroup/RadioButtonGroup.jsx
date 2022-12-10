import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function RadioButtonsGroup({hasLabel, list}) {
    const radioListRender = list.map((prop) =>
    <FormControlLabel key={prop.label} value={prop.value} control={<Radio />} label={prop.label} />
    )
  return (
    <FormControl>
      {hasLabel ? <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>:null}
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        {radioListRender}
        {/* <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" /> */}
      </RadioGroup>
    </FormControl>
  );
}
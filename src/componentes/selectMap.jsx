import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
//import { useState } from 'react';

export default function SelectLabels({ line, setLine }) {


  // const [line, setLine] = React.useState('');

  const handleChange = (event) => {
    setLine(event.target.value);
  };

  return (
    <div className='seleccionLinea'>
      <FormControl sx={{ m: 1, minWidth: 120 }} size='small'>
        <InputLabel id="demo-simple-select-helper-label">linea</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={line}
          label="Line"
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem  value={1}>TODAS</MenuItem>
          <MenuItem  value={10}>21A</MenuItem>
          <MenuItem  value={20}>21B</MenuItem>
          <MenuItem  value={21}>21D</MenuItem>
          <MenuItem  value={30}>21E</MenuItem>
          <MenuItem  value={40}>21F</MenuItem>
          <MenuItem  value={50}>21G</MenuItem>
          <MenuItem  value={60}>21J</MenuItem>
          <MenuItem  value={70}>21I</MenuItem>
          <MenuItem  value={80}>108A</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

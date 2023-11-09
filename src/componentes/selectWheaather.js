import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCity({ provincia, setProvincia }) {

  const handleChange = (event) => {
    setProvincia(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }} size='small'>
        <InputLabel id="demo-simple-select-autowidth-label">Provincias</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={provincia}
          onChange={handleChange}
          autoWidth
          label="Provincias"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={1}>Buenos Aires</MenuItem>
          <MenuItem value={2}>C.A BS As</MenuItem>
          <MenuItem value={3}>Catamarca</MenuItem>
          <MenuItem value={4}>Chaco</MenuItem>
          <MenuItem value={5}>Chubut</MenuItem>
          <MenuItem value={6}>Córdoba</MenuItem>
          <MenuItem value={7}>Corrientes</MenuItem>
          <MenuItem value={8}>Entre Ríos</MenuItem>
          <MenuItem value={9}>Formosa</MenuItem>
          <MenuItem value={10}>Jujuy</MenuItem>
          <MenuItem value={11}>La Pampa</MenuItem>
          <MenuItem value={12}>La Rioja</MenuItem>
          <MenuItem value={13}>Mendoza</MenuItem>
          <MenuItem value={14}>Misiones</MenuItem>
          <MenuItem value={15}>Neuquén</MenuItem>
          <MenuItem value={16}>Río Negro</MenuItem>
          <MenuItem value={17}>Salta</MenuItem>
          <MenuItem value={18}>San Juan</MenuItem>
          <MenuItem value={19}>San Luis</MenuItem>
          <MenuItem value={20}>Santa Cruz</MenuItem>
          <MenuItem value={21}>Santa Fe</MenuItem>
          <MenuItem value={22}>Santiago del Estero</MenuItem>
          <MenuItem value={23}>Tierra del Fuego</MenuItem>
          <MenuItem value={24}>Tucumán</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
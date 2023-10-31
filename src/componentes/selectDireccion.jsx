import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectAutoWidth({ line }) {
    const [direccion, setDireccion] = React.useState('');

    const handleChange = (event) => {
        setDireccion(event.target.value);
    };

    if (line === 10) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={90}>A EJERCITO DE LOS ANDES</MenuItem>
                        <MenuItem value={100}>A MASCHWITZ</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 20) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={110}>A PLAZA ITALIA X FLORIDA</MenuItem>
                        <MenuItem value={120}>A LINIERS X VILLA MARTELLI</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 21) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={110}>A EST BULOGNE</MenuItem>
                        <MenuItem value={120}>A DEFINIR</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 30) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={130}>A BOCA X AUTOPISTA</MenuItem>
                        <MenuItem value={140}>A ESTACION BULOGNE</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 40) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={150}>A FLORIDA</MenuItem>
                        <MenuItem value={160}>A LINIERS</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 50) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={170}>A UNLZ X ITATI</MenuItem>
                        <MenuItem value={180}>A RETIRO X ITATI</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 60) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={190}>A FABRICA FORD</MenuItem>
                        <MenuItem value={200}>A EJERCITO DE LOS ANDES</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 70) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={190}>A PTE LA NORIA</MenuItem>
                        <MenuItem value={200}>A ESCOBAR</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    } else if (line === 80) {
        return (
            <div>
                <FormControl sx={{ m: 1, minWidth: 160 }} size='small'>
                    <InputLabel id="demo-simple-select-autowidth-label">Direccion</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={direccion}
                        onChange={handleChange}
                        autoWidth
                        label="Direccion"
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={190}>A LINIERS</MenuItem>
                        <MenuItem value={200}>A RETIRO</MenuItem>
                    </Select>
                </FormControl>
            </div>
        );
    }
}
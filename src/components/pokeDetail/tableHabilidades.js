import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { getHabilidadDataPoke } from '../../utils/getData';


function createData(habilidadId, habilidades, detalle) {
  return { habilidadId, habilidades, detalle };
}

let rows = [];


const createRow = (abilities) => {
    rows = [];
    if (abilities.length === 0) return;
    for (const item of abilities) {
        const habilidadId = item.ability.url.split("/")[item.ability.url.split("/").length - 2];

        rows.push(createData(habilidadId, item.ability.name, item.is_hidden ? 'Si' : 'No'));
    }
};



export default function BasicTable(props) {
    const [open, setOpen] = React.useState(false);
    const [text, setText] = React.useState("");

    const handleClick = async (habilidadId) => {
        const getHabilidad = await getHabilidadDataPoke(habilidadId);

        setText(`Habilidad: ${getHabilidad.effect_entries.find(a => a.language.name === "en").effect}`);
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };




    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
      );
    



    createRow(props.abilities);


    return (
        <React.Fragment>
            <div>
                <Snackbar
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    message={text}
                    action={action}
                    anchorOrigin={{ vertical: 'top', horizontal: 'right' }}      
                />
            </div>

            <TableContainer component={Paper} sx={{ maxWidth: 700 }} style={{ margin: 'auto', marginTop: '30px', borderRadius: '8px' }}>
                <Table sx={{ maxWidth: 700 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Habilidades</TableCell>
                            <TableCell align="right">¿Es habilidad oculta?</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.habilidades}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell scope="row" style={{ cursor: 'pointer' }} onClick={() => handleClick(row.habilidadId)}>
                                    {row.habilidades}
                                </TableCell>
                                <TableCell align="right" style={{ paddingRight: '40px' }}>{row.detalle}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </React.Fragment>
  );
}

import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { makeStyles } from '@material-ui/core/styles';
import {TextField } from '@mui/material';

  
// Generate Order Data
function createData(id, date, titulo, view) {
  return { id, date, titulo, view };
}

const rows = [
  createData(
    0,
    'Acompanha molho de limão e mostarda',
    'Salada Simples',
    'false',
  ),
  createData(
    1,
    'É levado ao forno',
    'Frango em cubos e brócolis',
    'false',
  ),
  createData(2, 'Corte o brócolis em pedaços pequenos', 'Arroz com brócolis', 'false'),
  createData(
    3,
    'Queijos indicados: Prato ou Cheddar',
    'Brócolis com queijo',
    'false'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}
//const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#D32824',
    fontSize:'16px',
  },
  fundo:{
    backgroundColor:'#D32824',
  }
}));


export default function Orders() {
  const classes = useStyles();

  return (
    <React.Fragment  >
      <TextField
          id="filled-search"
          label="O que você tem em casa?"
          type="search"
          variant="filled"
        />
        <br/><br/>
      <Title>Resultados</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell> <b>Nome da Receita</b></TableCell>
            <TableCell><b>Descrição</b></TableCell>
            <TableCell><b>Ver</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody className={classes.root}>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.titulo}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell cursor="pointer" alignItems='center'>{<VisibilityIcon cursor='pointer' className={classes.root}/>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Ver mais receitas
      </Link>
    </React.Fragment>
  );
}
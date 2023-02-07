import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import { createTheme } from '@material-ui/core/styles';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import logo from '../../../src/Rango.png'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Anna Carolina Braga © '}
      <Link color="inherit" href="https://github.com/anna-braga-jesus/Rango">
        Projeto Autoral
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#D32824',
    borderRadius: '7px',
    height: '100wv',
  },
  image: {
    width: "200px",
    height: "200px",
    margin: "10px 0 0 0",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  input: {
    backgroundColor: "#f2f2f2",
    borderRadius: "7px",
    padding: "10px",
    border: "none",
    "&:focus": {
      border: "none",
      outline: "none",
    },
  },
  customButton: {
    backgroundColor: 'red',
    '&:hover': {
      backgroundColor: 'blue'
    },
  }}));

const theme = createTheme({
  overrides: {
      root: {
        marginTop: 0
      }
  },
  palette: {
    background: {
      default: "#D32824",
    },
  },
});

export default function SignUp() {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
  };

  return (
    <ThemeProvider theme={theme} >
      <img
        className={classes.image}
        src={logo}
        alt="Logo Rango"
      />
      <Container component="main" maxWidth="xs" className={classes.root}>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.input}
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="Digite seu nome"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  className={classes.input}
                  fullWidth
                  id="lastName"
                  label="Link do avatar"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  required
                  fullWidth
                  id="email"
                  label="Digite seu email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className={classes.input}
                  required
                  fullWidth
                  name="password"
                  label="Digite sua senha"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Quero receber promoções e atualizações por email."
                />
              </Grid>
            </Grid>
            <Button
              className={classes.root}
              type="submit"
              color="error"
              fullWidth
              variant="contained" 
              sx={{ mt: 3, mb: 2 }}
            >
              <b>Cadastrar</b>
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signin" variant="body2" underline='none' color="white" fontSize="13px">
                  Já possui uma conta? <b>Faça login</b> 
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
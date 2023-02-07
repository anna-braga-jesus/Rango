import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import logo from '../../../src/Rango.png'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core';

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
  }));

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
export default function SignIn() {
  const classes = useStyles();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
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
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              className={classes.input}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Digite seu email"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              className={classes.input}
              margin="normal"
              required
              fullWidth
              name="password"
              label="Digite sua senha"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Lembrar-me"
            />
            <Button
              class={classes.root.customButton}
              type="submit"
              color="error"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              <b>Login</b>
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="/signup" variant="body2" underline='none' color="white" fontSize="13px">
                  Esqueceu sua senha?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2" underline='none' color="white" fontSize="13px">
                  {"Ainda não possui conta? Cadastre-se"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
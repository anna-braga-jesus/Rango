import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Avatar from '@material-ui/core/Avatar';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';


function ImageAvatar({ imageUrl }) {
  const [hasImage, setHasImage] = useState(false);

  const handleImageLoad = () => {
    setHasImage(true);
  };

  return (
    <Avatar>
      {hasImage ? (
        <img onLoad={handleImageLoad} src={imageUrl} alt="User" />
      ) : (
        <CheckCircleOutlineIcon />
      )}
    </Avatar>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Anna Carolina Braga © '}
      <Link color="inherit" href="https://github.com/anna-braga-jesus/Rango">
      Projeto Autoral
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const theme = createTheme();

export default function Profile() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <AppBar position="relative">
        <Toolbar>
          <ImageAvatar sx={{ mr: 2 }} />
          <Typography variant="h6" color="inherit" noWrap>
            Olá, Anna!
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Anna Carolina
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
             <b>annajesus.nave@gmail.com</b> 
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 1 }} maxWidth="md">
        <div style={{display: "flex", justifyContent: "center"}}>
            <Typography variant="h4" color="inherit" noWrap marginBottom={3}>
                <b>Favoritos</b>
            </Typography>
        </div>
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                      This is a media card. You can use this section to describe the
                      content.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}

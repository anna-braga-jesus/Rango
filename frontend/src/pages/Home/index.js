import * as React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { mainListItems, secondaryListItems } from './listItems';
import CropPortraitIcon from '@mui/icons-material/CropPortrait';
import Orders from './Orders';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import image1 from '../../Rango.png'
import KitchenIcon from '@mui/icons-material/Kitchen';

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    //height: 500,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    underline:'none', 
    color:'white',
    height: 240,
  },
  imageContainer: {
    maxWidth: '80%',
    maxHeight: '80%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '210px',
    height: '240px',
    maxWidth: '70%',
    maxHeight: '70%',
    objectFit: 'cover',
    alignItems: 'center',
    borderRadius: '7px',
    marginRight:'10px',
    cursor: 'pointer',
  },
  arrowContainer: {
    width: '10%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
const images = [
  {
    url: "https://cdn.minhareceita.com.br/2020/08/hamburguer-angus-fatias-redondas-bacon-desktop.jpg",
    title: 'Image 1',
    description: 'Description for Image 1',
  },
  {
    url: 'https://img.cybercook.com.br/receitas/43/coxa-e-sobrecoxa-de-frango-na-airfryer-1-840x480.jpeg?q=75',
    title: 'Image 2',
    description: 'Description for Image 2',
  },
  {
    url: 'https://vejario.abril.com.br/wp-content/uploads/2022/09/WhatsApp-Image-2022-09-05-at-01.47.11.jpeg?quality=70&strip=info&w=1024&h=720&crop=1',
    title: 'Image 3',
    description: 'Description for Image 3',
  },
  {
    url: 'https://cdn.e-konomista.pt/uploads/2019/09/sushi-caseiro-refeicao.jpg',
    title: 'Image 4',
    description: 'Description for Image 2',
  },
  {
    url: 'https://receitinhas.com.br/wp-content/uploads/2022/03/Isamara-Amancio-730x365.jpg',
    title: 'Image 5',
    description: 'Description for Image 3',
  },
];
const mdTheme = createTheme();

function Home() {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px',
              backgroundColor: '#D32824',
              // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              display='flex'
              alignItems='center'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              <b>Welcome to Rango</b>
              <KitchenIcon />
            </Typography>
            <IconButton color="inherit">
              <Badge >
                <Link to='/signin'>
                <ExitToAppIcon className={classes.root} />
                </Link>
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            {mainListItems}
            <Divider sx={{ my: 1 }} />
            {secondaryListItems}
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} >
                <h1>Mais populares</h1>
                {/* <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                    justifyContent: 'center',
                    fontSize: 'large',
                    backgroundColor: '#D32824',
                  }}
                > */}
               <div className={classes.root}>
               <div className={classes.imageContainer}>
  {images.slice(currentIndex, currentIndex + 4).map((image, index) => (
    <img
      key={index}
      className={classes.image}
      src={image.url}
      alt={image.title}
      title={image.title}
    />
  ))}
</div>

    </div>
                  {/* <Chart /> */}
                {/* </Paper> */}
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', height: '150%' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <Home />;
}
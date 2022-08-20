import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { AttractionService } from "./api/attraction";

export default function Attraction({ attraction }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 2 }}>
        <Card>
          <CardMedia
            component="img"
            height="500"
            image={attraction.coverimage}
            alt={attraction.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {attraction.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {attraction.detail}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
          </CardActions>
        </Card>
      </Container>

    </Box>
  )
}

export async function getStaticPaths() {

  const attractions = await AttractionService.getAllAttraction({})

  const paths = attractions.map((attraction) => ({
    params: { id: attraction._id },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const attraction = await AttractionService.getAttractionById({ _id: params.id })

  return { props: { attraction } }
}

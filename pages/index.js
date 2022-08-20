import Link from 'next/link'

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

export default function Home({ attractions }) {
  return (
    <div>
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
            {/* <Button color="inherit">Login</Button> */}
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg" sx={{ mt: 2 }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {attractions.map((attraction) => (
                <Grid item xs={12} lg={4} key={attraction._id}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={attraction.coverimage}
                      alt={attraction.name}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {attraction.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" noWrap={true}>
                        {attraction.detail}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Link href={"/" + attraction._id}>
                        <Button size="small" >Learn More</Button>
                      </Link>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>

      </Box>

    </div>
  )
}

export async function getStaticProps() {

  const attractions = await AttractionService.getAllAttraction({})
  return {
    props: {
      attractions,
    },
  }
}

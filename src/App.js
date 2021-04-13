import React from "react";
import {
  makeStyles,
  Box,
  Grid,
  Container,
  Button,
  ButtonGroup,
  AppBar,
  CssBaseline,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Toolbar,
} from "@material-ui/core";

import { PhotoCamera } from "@material-ui/icons";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: red,
  },
  button: {
    marginTop: "40px",
  },
  CardMedia: {
    paddingTop: "56.25%",
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative" color="secondary">
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">Flexing Skills</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm" align="center">
            <Typography variant="h2" gutterBottom>
              Flexing skills
            </Typography>
            <Typography variant="h6">
              Have you been coding CSS for some time, but want to take your game
              to the next level? Do you feel confused with CSS jargon like
              inheritance, specificity or the cascade? What if there was one
              resource, one place, where you could learn all the advanced and
              modern CSS techniques and properties you've been reading about?
            </Typography>
          </Container>
        </div>
        <div className={classes.button}>
          <Grid container spacing={2} justify="center">
            <Grid item>
              <Button variant="contained" color="primary">
                photos
              </Button>
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                photos
              </Button>
            </Grid>
          </Grid>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className={classes.CardMedia}
                    image="https://source.unsplash.com/random"
                  />
                  <CardContent>
                    <Typography variant="h5">heading</Typography>
                    <Typography variant="h6">
                      there is a lot of content but ihate it
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="primary">
                      sdds
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </>
  );
};

export default App;

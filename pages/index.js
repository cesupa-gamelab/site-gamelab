import Layout from "components/layout/Layout";

import { Container, Grid, Typography, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  img: {
    width: "100%",
    height: "250px",
    boxShadow: "0px 2px 20px rgba(0,0,0,0.4)",
  },
}));

const About = () => {
  const classes = useStyles();
  return (
    <Layout
      // type your page title and page description.
      title="GameLab"
     >
        
          <Container maxWidth="md">

              <img
                  src="https://i.imgur.com/raVlmaU.png"
                  alt="Logo do gameLab"
                  className={classes.img}
              />
        <Grid container direction="column" alignItems="center" spacing={4}>
          <Grid item>
           
          </Grid>
          <Grid item>
            <Container maxWidth="sm">
              <Typography variant="h2" align="center">
                Grupo de estudos de jogos digitais do CESUPA ARGO que objetiva reunir alunos dos cursos de tecnologia para desenvolver e praticar modelagem e desenvolvimento de software relacionados ao mundo dos jogos digitais.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  );
};

export default About;

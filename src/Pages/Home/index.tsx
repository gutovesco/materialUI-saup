import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { useHistory } from 'react-router';

export default function Home() {
    const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    header: {
      backgroundColor: '#fff',
      borderBottomColor: "#e3e3e3",
      borderBottomWidth: '2px',
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: '#00A8E0',
    },
    title: {
      flexGrow: 1,
      color: '#00A8E0',
    },
    wrapper: {
      height: '90vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardRoot: {
      width: 300,
      borderRadius: 30,
      minHeight: 400,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      marginRight: '4rem',
    },
    cardDescription: {
      color: '#907E7E',
    },
    cardButton: {
      backgroundColor: '#00A8E0',
      margin: '0 auto',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff',
      borderRadius: 20,
      width: 250,
      height: 40,
      marginBottom: 15,
    }
  }),
);

 const classes = useStyles();
 const history = useHistory()

    return (
        <>
    <header>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </header>
    <Container className={classes.wrapper}>
      <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        <Typography style={{fontSize: '24px', fontWeight: 'bold'}} color="textPrimary" gutterBottom>
          SAUB
        </Typography>
        <Typography className={classes.cardDescription} color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam leo eget ullamcorper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam leo eget ullamcorper tristique. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.cardButton}>Learn More</Button>
      </CardActions>
    </Card>
    <Card className={classes.cardRoot} variant="outlined">
      <CardContent>
        <Typography style={{fontSize: '24px', fontWeight: 'bold'}} color="textPrimary" gutterBottom>
          LCR
        </Typography>
        <Typography className={classes.cardDescription} color="textSecondary">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam leo eget ullamcorper tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam leo eget ullamcorper tristique. 
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => history.push('/saub')} className={classes.cardButton}>Learn More</Button>
      </CardActions>
    </Card>
    </Container>
    </>
    )
}

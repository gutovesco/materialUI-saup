import React, { useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

export default function SaubHome() {
    const [age, setAge] = useState('')
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
      margin: '0'
    },
    formControl: {
      minWidth: 350,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    dropdownWrapper: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '3rem',
    },
  }),
);

 const classes = useStyles();

 const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setAge(event.target.value as string);
  };

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
        <Container className={classes.dropdownWrapper}>
            <Typography variant="h6" style={{marginRight: '1rem'}}>
            Select Effective Date
          </Typography>
        <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={age}
          onChange={handleChange}
          label="Select Effective Date"
        >
          <MenuItem value='PRODUCTION Weekly Production Date'>PRODUCTION Weekly Production Date</MenuItem>
          <MenuItem value='08/30/2021 Mid Week Date'>08/30/2021 Mid Week Date</MenuItem>
          <MenuItem value='08/31/2021 Weekly Production Date'>08/31/2021 Weekly Production Date</MenuItem>
        </Select>
      </FormControl>
        </Container>
    </Container>
    </>
    )
}

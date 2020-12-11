import React from 'react';
import { Link, useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles({
  root: {
    flexGrow: 3,

  },
});

export const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    <Paper className={classes.root}>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Link to='/' style={{ textDecoration: 'none', color: 'black' }}><Tab label="home"></Tab></Link>
        <Link to="/wellbeing" style={{ textDecoration: 'none', color: 'black' }} ><Tab label="well-being"></Tab></Link>
        <Link to="/journal" style={{ textDecoration: 'none', color: 'black' }}><Tab label="journal"></Tab></Link>
        <Link to="/goals" style={{ textDecoration: 'none', color: 'black' }}><Tab label="goals"></Tab></Link>
        <Link to="/login" style={{ textDecoration: 'none', color: 'black' }}><Tab label="log-out"></Tab></Link>
      </Tabs>
    </Paper>
  );
}


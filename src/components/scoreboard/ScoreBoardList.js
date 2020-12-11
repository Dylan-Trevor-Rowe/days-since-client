import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


export const ScoreBoardList = () => {

  const dayCounter = (counter) => { 
   
  const DateNow = Date.now() 
  const newDate = Date.now() + 1 
  
    if(newDate > DateNow) {
     return counter++
    }
  }

  const [score, setScore] = useState(dayCounter(1))
  const [spacing] = React.useState(2);
 
const useStyles = makeStyles((theme) => ({

  root: {
      flexGrow: 1,
    },
    paper: {
      height: 200,
      width: 300,
      marginTop: 50,
      textAlign: 'center',
    },
    control: {
      padding: theme.spacing(2),
    },
    Button: {
      marginTop: 25
    }
  }));

  const classes = useStyles();
  return <>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid>
            <Paper className={classes.paper} style={{ backgroundColor: "#9dabb1" }}>
              <div>
                <h1>Days Since</h1>
                <h1 className="score">{score}</h1>
                <Button onClick={() => setScore(0)} className={classes.Button} variant="contained" color="primary">Reset counter</Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
}






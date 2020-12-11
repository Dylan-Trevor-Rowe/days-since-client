import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {  useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ScoreBoard.css'
import { SettingsCellRounded } from '@material-ui/icons';



export const ScoreBoardList = (props) => {

  const [score, setScore] = useState(0)
  const [spacing] = React.useState(2);
 
const daysSince = (scored) => { 
var initialDate = new Date(2020,8,11); 
var now = Date.now();
var difference = now - initialDate;
var millisecondsPerDay = 24 * 60 * 60 * 1000;
var daysSinceCount = Math.floor(difference / millisecondsPerDay);
 setScore(scored)
}
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
      marginTop: 5
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
                <h1 className="days_since_score">Days Since</h1>
                <h1 className="score">{score}</h1>
                <Button onClick={score === 0}  style={{ backgroundColor: "#1B4353" }}  className={classes.Button} variant="contained" color="primary">Reset counter</Button>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
}






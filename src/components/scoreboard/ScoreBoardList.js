import React, { useContext, useEffect } from 'react';
import { ScoreBoardContext } from './ScoreBoardProvider'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ScoreBoard.css';
export const ScoreBoardList = (props) => {
  const [score, setScore] = useState()
  const [spacing] = React.useState(2);
  const { createScoreBoard, getScoreBoardData, scoreBoardData } = useContext(ScoreBoardContext)
  useEffect(() => {
    getScoreBoardData()
  // let counter = 0
  //  const dateFinder = scoreBoardData.map((value)=> {
  //      return value.created
  //    })
  //    const newDateFinder = new Date(dateFinder)
  //    const nowsDate = Date.now()
  //    if(newDateFinder > nowsDate ) {
  //      setScore(counter++)
   }, [])


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
  const reversedScore = scoreBoardData.slice().reverse()
 const classes = useStyles();
  return <>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid>
            <Paper className={classes.paper} style={{ backgroundColor: "#9dabb1" }}>
              <div>
                <h1 className="days_since_score">Days Since</h1>
                {reversedScore.slice(0, 1).map((value) => {
                  return (
                    <div>
                    <h1>{value.daysSinceBoard}</h1>
                    <Button style={{ backgroundColor: "#1B4353", margin:10 }} onClick={() => {}} className={classes.Button} variant="contained" color="primary">add a day</Button>
                    </div>
                  )
                })}
                <h1 className="score"></h1>
                {/* <Button style={{ backgroundColor: "#1B4353", margin:10 }} onClick={() => setScore(score + 1) & constructANewScore()} className={classes.Button} variant="contained" color="primary">add a day</Button>
                <Button style={{ backgroundColor: "#1B4353", margin:10  }} onClick={() => setScore(0) & constructANewScore()} className={classes.Button} variant="contained" color="primary">reset</Button> */}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
}
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useContext, useEffect, useState } from 'react'
import { ScoreBoardContext } from './ScoreBoardProvider.js'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';


export const ScoreBoardList = (props) => {


  const { scoreBoardData, getScoreBoardData } = useContext(ScoreBoardContext)
 
  

  const [spacing, setSpacing] = React.useState(2);
  console.log(scoreBoardData)

  useEffect(() => {
   getScoreBoardData()
  }, [])
  
const now = Date.now()
console.log(now)
const newer = new Date
console.log(newer)



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
    }}));
  
    const classes = useStyles();
  return <>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid>
            <Paper className={classes.paper} style={{ backgroundColor: "#9dabb1" }}>
              {scoreBoardData.map((value) => {
                return (
                  <div key={value}>
                    <h1>Days Since</h1>
                    <h1>{value.daysSinceBoard}</h1>
                    <Button className={classes.Button}  variant="contained" color="primary">Reset counter</Button>
                  </div>)
              })}
             </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
}






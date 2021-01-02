import React, { useContext, useEffect } from 'react';
import { ScoreBoardContext } from './ScoreBoardProvider'
import { QuoteContext } from '../quotes/QuoteProvider'
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ScoreBoard.css';

export const ScoreBoardList = (props) => {
  // const [score, setScore] = useState()
  const [spacing] = React.useState(2);
  const { createScoreBoard, getScoreBoardData, scoreBoardData } = useContext(ScoreBoardContext)
  const { getQuoteData, quoteData } = useContext(QuoteContext)

  console.log(getQuoteData)

  useEffect(() => {
    getScoreBoardData()

  }, [])


  useEffect(() => {
    getQuoteData()

  }, [])



  // const randomQuote =  quoteData.map((quote) => {
  //    const number = Math.floor(Math.random() * (quote.length));

  //   })
  //   console.log(random)


  // const randomQuote =  quoteData.map((quote) => {
  //   return quote.text
  //   })







  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      flexWrap: 'wrap',
      marginTop: 50,
      textAlign: 'center',
      maxHeight: 400,
      maxWidth: 400
    },
    control: {
      padding: theme.spacing(2),
    },
    Button: {
      marginTop: 5
    }
  }));

  const randomQuote = quoteData.splice(Math.floor(Math.random() * quoteData.length), 1);
  console.log(randomQuote)

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
                      <Button style={{ backgroundColor: "#1B4353", margin: 10 }} onClick={() => { }} className={classes.Button} variant="contained" color="primary">add a day</Button>
                    </div>
                  )
                })}
                <h1 className="score"></h1>
                {randomQuote.map((quote) => {
                  return <div key={quote}>
                  <h4> "{quote.text}"</h4>
                   {quote.author ? <h4>  {quote.author}</h4> : <h4>uknown</h4>}
                </div>
               
                })}
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
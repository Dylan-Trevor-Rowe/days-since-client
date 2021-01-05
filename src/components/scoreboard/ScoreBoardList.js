import React, { useContext, useEffect, useState } from 'react';
import { QuoteContext } from '../quotes/QuoteProvider'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ScoreBoard.css';
import { ScoreBoardContext } from './ScoreBoardProvider';

export const ScoreBoardList = (props) => {

  const [spacing] = React.useState(2);
  const { getQuoteData, quoteData, } = useContext(QuoteContext)

  useEffect(() => {
    getQuoteData()
  }, [])

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 2,

    },
    paper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
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

  const [num, setNum] = useState(0)

  const numbers = JSON.parse(localStorage.getItem("numbers")) || []
  //getting numbers array in localStorage
  const userId = localStorage.getItem("user_id")
  // get the userId created upon log in and registration
  const increase = () => {
    setNum(num + 1)
    const lastVal = {
      userId,
      num: num + 1
    }
    // function that creates an object and sets the state to num + 1
    numbers.push(lastVal)
    // push object into an empty array called numbers and set it in local state
    localStorage.setItem("numbers", JSON.stringify(numbers))
  }

  const decrease = () => {
    setNum(0)
    const lastVal = {
      userId,
      num: 0
    }
 
    numbers.push(lastVal)
    localStorage.setItem("numbers", JSON.stringify(numbers))
    window.location.reload();
  }

  const userNum = numbers.filter(number => number.userId === userId)
//  filter numbers where userId in the numbers array = localstoreage.getitem('user_id)
//  if there is a number like that slice it out and user it. 
  const specificNum = userNum[0] && userNum.slice(-1)[0].num

  const randomQuote = quoteData.splice(Math.floor(Math.random() * quoteData.length), 1);
  const classes = useStyles();
  return <>
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          <Grid>
            <Paper className={classes.paper} style={{  }}>
              <div>
                <Button color="primary" onClick={() => increase()}>LOG</Button>
                <Button color="primary" onClick={() => decrease()}>reset</Button>
                <h1>Days-Since</h1>
                <h3>{specificNum}</h3>
                {randomQuote.map((quote) => {
                  return <div key={quote.id}>
                    <h4> "{quote.text}"</h4>
                    {quote.author ? <h4>  {quote.author}</h4> : <h4>Unknown</h4>}
                  </div>
                })}
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  </>
}
import React, { useContext, useEffect, useState } from 'react';
import { QuoteContext } from '../quotes/QuoteProvider'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ScoreBoard.css';
import { MediaCard } from '../wellbeing/MsContainer';




export const ScoreBoardList = (props) => {

  const [spacing] = React.useState(2);
  const { getQuoteData, quoteData, } = useContext(QuoteContext)

  useEffect(() => {
    getQuoteData()
  }, [])

  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 2,
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      alignContent: 'center'
    },
    paper: {
      marginTop: 50,
      marginRight: 20,
      textAlign: 'center',
      maxHeight: 300,
      Width: 200,
      borderColor: 'grey.500',
  },
    control: {
      padding: theme.spacing(2),
    },
    Button: {
      marginTop: 5
    },
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

    <div container className={classes.root} spacing={2}>

      <Paper className={classes.paper} style={{ border: 'solid', borderWidth: '1px' }} >
        <div>
          <Button onClick={() => increase()}>LOG</Button>
          <Button onClick={() => decrease()}>reset</Button>
          <h1 style={{ fontFamily: 'Belleza' }}>Days-Since</h1>
          <h3 style={{ fontFamily: 'Tinos', fontSize: 'larger' }}>{specificNum}</h3>
          <div>
            {randomQuote.map((quote) => {
              return <div key={quote.id}>
                <h4 style={{ fontFamily: 'Belleza', fontSize: 'large' }}> "{quote.text}"</h4>
                {quote.author ? <h4 style={{ fontFamily: 'Tinos', fontSize: 'smaller' }}>  {quote.author}</h4> : <h4>Unknown</h4>}
              </div>
            })}
          </div>
        </div>
      </Paper>
      <MediaCard className={classes.media}/>
    </div>


  </>
}
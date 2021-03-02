import React, { useContext, useEffect, useState } from 'react';
import { QuoteContext } from '../quotes/QuoteProvider'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './ScoreBoard.css';
import { MediaCard } from '../wellbeing/MsContainer';

export const ScoreBoardList = (props) => {

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
      alignContent: 'center',

    },
    paper: {
      marginTop: 50,
      marginRight: 20,
      textAlign: 'center',
      maxHeight: 300,
      maxWidth: 300,
      borderColor: 'grey.500',
    },
    control: {
      padding: theme.spacing(2),
    },
    Button: {
      marginTop: 5
    },
  }));
  const randomQuote = quoteData.splice(Math.floor(Math.random() * quoteData.length), 1);
  const classes = useStyles();
  return <>
    <div container className={classes.root} spacing={2}>
      <Paper className={classes.paper} style={{ border: 'solid', borderWidth: '1px' }} >
        <div>
          <Button onClick={() => increase()}>LOG</Button>
          <Button onClick={() => decrease()}>reset</Button>
          <h1 style={{ fontFamily: 'Belleza' }}>Days-Since</h1>
          <div>
            {randomQuote.map((quote) => {
              return <div key={quote.id}>
                <h4 style={{ fontFamily: 'Belleza', fontSize: 'large' }}>
                  "{quote.text}"
                </h4>
                {quote.author ? <h4 style={{ fontFamily: 'Tinos', fontSize: 'smaller' }}>
                  {quote.author}
                </h4>
                  : <h4>Unknown</h4>}
              </div>
            })}
          </div>
        </div>
      </Paper>
      <MediaCard className={classes.media} />
    </div>
  </>
}
import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { JournalEntryContext } from './JournalEntryProvider'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  select_container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  root: {
    display: 'flex',
    minHeight: 300,
    minWidth: 200,
    maxWidth: 250

  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

export function Journal() {

  const { journalEntryData, getJournalEntryData, deleteJournalEntry } = useContext(JournalEntryContext)
  const [journalentry, setJournalEntry] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectValue] = React.useState([]);


  const classes = useStyles();

  let history = useHistory();

  function handleClick() {
    history.push("/journalform");
  }

  useEffect(() => {
    getJournalEntryData()


  }, [])

  const handleChange = (event) => {
    setJournalEntry(event.target.value);
    setSelectValue(event.target.value)
  };

  const journalFilter = journalEntryData.filter((entry) => {
    return entry.id === selectedValue
  })


  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return <>
    <div className={classes.select_container}>
      <Button className={classes.button} onClick={handleOpen}>
        Open the select
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">
          journal-entry
        </InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={journalentry}
          onChange={handleChange}>
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {journalEntryData.map(item => {
            return <MenuItem value={item.id}>
              {item.date}
            </MenuItem>;
          })}
        </Select>
      </FormControl>
    </div>
    <div className="card_container">
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}
            color="textSecondary"
            gutterBottom>
            {journalFilter.map(entry => {
              return <div key={entry}>
                <h2 style={{ fontSize: 'Bolder' }}>
                  Date: {entry.date}</h2>
                <h3 style={{ fontSize: 'Bolder' }}>
                  Entry: {entry.entry}</h3>
                <Button onClick={() =>
                  deleteJournalEntry(entry.id)}>
                  Remove-Entry
                </Button>
                <Button onClick={() => {
                  history.push(`/journalform/edit/${entry.id}`)
                }}>Edit</Button>
              </div>
            })}
          </Typography>
        </CardContent>
      </Card>
    </div>
    <div className='button_container'>
      <Button onClick={handleClick} >
        create a new entry
      </Button>
    </div>
  </>
}

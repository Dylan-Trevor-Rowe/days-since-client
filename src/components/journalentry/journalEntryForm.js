import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { JournalEntryContext } from './JournalEntryProvider'

export const JournalEntryForm = () => {

    useEffect(() => {
        getJournalEntryData()

    }, [])

    const { getJournalEntryData, createJournalEntryData } = useContext(JournalEntryContext)
    const [currentJournalEntry, setJournalEntry] = useState('')
    const [currentDate, setCurrentDate] = useState('')

    const handleChange = (e) => {
        const name = e.target.value
        setJournalEntry(name)
    }

    const handleChangeTwo = (e) => {
        const name = e.target.value
        setCurrentDate(name)
    }

    const dateData = new Date().toISOString().slice(0, 10);

    const constructANewDay = (event) => {
        const newEntry = {
            date: dateData,
            entry: currentJournalEntry,
            user: localStorage.getItem('days_since_token')
        }
        createJournalEntryData(newEntry)
    }
    const useStyles = makeStyles((theme) => ({
        container: {
            display: 'flex',
            flexWrap: 'wrap',
            flexDirection: 'column',
            alignContent: 'center'
        },
        textField: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginTop: 30,
            width: 200,
        },
        textFieldTwo: {
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            marginTop: 30,

        },
    }));

    const classes = useStyles();

    return (
        <>
            <div className={classes.container}>
                <TextField
                    type="date"
                    name="date"
                    value={currentDate}
                    onChange={handleChangeTwo}
                    defaultValue="none"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                <br></br>
                <div className="root">
                    <TextField
                        variant="outlined"
                        placeholder="diary"
                        multiline
                        rows={8}
                        rowsMax={10}
                        value={currentJournalEntry}
                        onChange={handleChange} />
                </div>
                <Button onClick={constructANewDay} style={{ backgroundColor: "#1B4353", margin: 10 }} className={classes.Button} variant="contained" color="primary">submit</Button>
            </div>
            <br />
        </>
    );
}
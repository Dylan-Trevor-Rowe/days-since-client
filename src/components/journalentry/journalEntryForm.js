import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { JournalEntryContext } from './JournalEntryProvider'
import { useHistory } from 'react-router-dom';

export const JournalEntryForm = (props) => {

    
    const { getJournalEntryData, createJournalEntryData, getJournalEntryDataById, updateJournalData } = useContext(JournalEntryContext)
    const [localState, setLocalState] = useState({})

    useEffect(() => {
        getJournalEntryData()
        getJournalEntryDataById(props.match.params.journalId)
        .then(res => setLocalState(res))
    }, [])

    const editMode = props.match.params.journalId

    // const handleChange = (e) => {
    //     const name = e.target.value
    //     setJournalEntry(name)
    // }

    // const handleChangeTwo = (e) => {
    //     const name = e.target.value
    //     setCurrentDate(name)
    // }

    const handleControlledInputChange = (e) => {
        const newJournalObject = Object.assign({}, localState)
        newJournalObject[e.target.name] = e.target.value
        setLocalState(newJournalObject)
    }

    // const dateData = new Date(Date.now()).toJSON().slice(0, 10);


    const history = useHistory()

    const constructANewDay = (props) => {
        if (editMode) {

            updateJournalData({
                id: editMode,
                date: localState.date,
                entry: localState.journal,
            }).then(() => {
                history.push('/journal')
            })
        } else {

        const newEntry = {
            date: localState.date,
            entry: localState.journal,
        }
        createJournalEntryData(newEntry).then(() => {
            getJournalEntryData().then(() => {
                history.push('/journal')
            })
        })
    }
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
                    value={localState.date}
                    onChange={handleControlledInputChange}
                    defaultValue={localState.date}
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
                        name="journal"
                        multiline
                        rows={8}
                        rowsMax={10}
                        value={localState.journal}
                        defaultValue={localState.entry}
                        onChange={handleControlledInputChange} />
                </div>
                <Button onClick={constructANewDay}
                    style={{ backgroundColor: "#1B4353", margin: 10 }}
                    className={classes.Button} variant="contained"
                    color="primary">submit</Button>
            </div>
            <br />
        </>
    );
}
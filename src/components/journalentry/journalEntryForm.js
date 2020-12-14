import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import  Button from '@material-ui/core/Button';

export const JournalEntryForm = () => {

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
        <form className={classes.container} noValidate>

            <TextField
                id="date"
                label="todays Date"
                type="date"
                defaultValue="2017-05-24"
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
                />
            </div>
            <br/>
        <Button style={{ backgroundColor: "#1B4353", margin:10 }}  className={classes.Button} variant="contained" color="primary">submit</Button>  
        </form>

    );
}
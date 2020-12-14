import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button'
import './goals.css'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        marginLeft: 30,
        marginTop: 50
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root: {
        width: 300,
        marginTop: 35,
        marginLeft: 30

    },
    Button: {
        height: 40,
        marginLeft: 10
    }
}));

export const GoalsForm = () => {
    const classes = useStyles();

    const [name, setName] = useState([])
    const getValue = (e) => {
        let data = name;
        data.push(e.target.value)
        setName(data)
    }

    return <>

        <div className="goals_container">
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="date"
                    type="date"
                    defaultValue="none"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <br />
            <br />
        </div>
        <div className="checkbox_container">
            <br></br>
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="none"
                labelPlacement="top" />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="sudoku: 10 mins"
                labelPlacement="top" />
        </div>
        <div className="checkbox_container">
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="sudoku: 10 mins"
                labelPlacement="top" />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="sudoku: 10 mins"
                labelPlacement="top"
            />  </div>
        <div className="checkbox_container">
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="sudoku: 10 mins"
                labelPlacement="top" />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="sudoku: 10 mins"
                labelPlacement="top" />
        </div>
        <br></br>
        <div className="goal_input">
            <TextField id="standard-basic" label="goal" />
            <Button style={{ backgroundColor: "#1B4353", marginLeft: 10 }} className={classes.Button} variant="contained" color="primary">add a goal</Button>
        </div>
        <div className="button_container">
            <Button style={{ backgroundColor: "#1B4353", marginLeft: 10 }} className={classes.Button} variant="contained" color="primary">submit</Button>
        </div>
    </>
}

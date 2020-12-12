import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';

import './WellBeing.css'


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
}));

export function WellBeingForm() {
    const classes = useStyles();

    function valuetext(value) {
        return `${value}`;
    }

    const [name, setName] = useState([])
    const getValue = (e) => {
        let data = name; 
        // setting state variable name to the variable data
        data.push(e.target.value)
        // data sends the on change value from the event object
        setName(data)
        // then names value is updated
    }

    return <>
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
        <div className={classes.root}>
            <Typography id="discrete-slider" gutterBottom>
                <h2>fatigue-scale: 1-5</h2>
      </Typography>
            <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={5}
            />
            <Typography id="discrete-slider" gutterBottom>
                <h2>pain-scale: 1-5</h2>
      </Typography>
            <Slider
                defaultValue={0}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={5}
            />
      
        <br />
            <br />
            <h2>Symptoms</h2>
        </div>
        <div className="checkbox_container">
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="none"
                labelPlacement="top"
            />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="numbness"
                labelPlacement="top"
            />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="tingling"
                labelPlacement="top"
            />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="weakness"
                labelPlacement="top"
            />
        </div>
        <div className="checkbox_container">
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="stiffness"
                labelPlacement="top"
            />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="bad-coordination"
                labelPlacement="top"
            />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="heat-sensitivity"
                labelPlacement="top"
            /></div>
        <div>
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="incontenance"
                labelPlacement="top"
            />
            <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="brain-fog"
                labelPlacement="top"
            />
                  <FormControlLabel
                onChange={(e) => getValue(e)}
                value=""
                control={<Checkbox color="primary" />}
                label="naseau"
                labelPlacement="top"
            />
        </div>
    </>
}

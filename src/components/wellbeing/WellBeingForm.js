import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';

import './WellBeing.css'


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 30,
        marginTop: 50,
        width: 500
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
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
        data.push(e.target.value)
        setName(data)
    }

    // function Usage() {
    //     const [checkedOne, setCheckedOne] = useState(false);
    //     const updateOne = () => setCheckedOne(!checkedOne);
    //     const [checkedTwo, setCheckedTwo] = useState(true);
    //     const updateTwo = () => setCheckedTwo(!checkedTwo);
      
    //     return (
    //       <>
    //         <Checkbox
    //           name="a"
    //           label="Checkbox"
    //           checked={checkedOne}
    //           onChange={updateOne}
    //         />
    //         <Checkbox
    //           name="b"
    //           label="Checkbox"
    //           checked={checkedTwo}
    //           onChange={updateTwo}
    //           // disabled={true}
    //         />
    //       </>
    //     );
    //   }

    return <>

        <form className="checkbox_container" noValidate>
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
        <div  className="slider_container">
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
        <div className="checkbox_container">
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
            <br></br>
            </div>
        <div className="button_container">
        <Button style={{ backgroundColor: "#1B4353", margin:10 }}  className={classes.Button} variant="contained" color="primary">submit</Button>
        </div>  
    </>
}

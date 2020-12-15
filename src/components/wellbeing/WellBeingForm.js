import React, { useContext, useState, useEffect } from 'react';
import { WellBeingContext } from './WellBeingProvider'
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

    const { createWellBeingData, getWellBeingData } = useContext(WellBeingContext)

    const classes = useStyles();

    function valuetext(value) {
        return `${value}`;
    }
// initialize an empty state array
    const [checkedValues, setCheckedValues] = useState([

    ]);
    // console.log(checkedValues)

    useEffect(() => {
        getWellBeingData()

    }, [])

    
    const toggle = (e) => {
        const name = e.target.name;
        switch(name) {
            case 'noSymptoms': {
                setNoSymptomsChecked(true);
                break;
            }
            case 'numbness': {
                setNumbnessChecked(true);
                break;
            }
            case 'tingling': {
                setTinglingChecked(true);
                break;
            }
            default: break;

        }
        console.log('toggle name', e.target.name);
        // set a variable that equals the name that is checked
        if (checkedValues.includes(name)) {
            // if that name exists in the state array
            const updatedCheckedValues = checkedValues.filter(checkedValue => {
                // set a variable called updateCheckedValues that filters the values
                // that have not been checked
                return checkedValue != name
            })
            setCheckedValues(updatedCheckedValues)
            // set those unchchecked values to your state array
        } else {
            const updatedCheckedValues = checkedValues.slice()
            // else make a copy of the state array
            updatedCheckedValues.push(name)
            // push the checked names into the state array
            setCheckedValues(updatedCheckedValues)
        }
        // // define 3 variables and when you get checked value from checkbox you can update state value
        // // using switch state if = 'stiffness' stiffness = true...

    }
    const [ tinglingChecked, setTinglingChecked ] = useState(0)
    const [ noSymptomsChecked, setNoSymptomsChecked ] = useState(0)
    const [ numbnessChecked, setNumbnessChecked ] = useState(0)

    const [sliderValue, setSliderValue] = useState(0)
    const updateRange = (e, data) => {
        setSliderValue(data)

    }

    const [sliderValueTwo, setSliderValueTwo] = useState(0)
    const updateRangeTwo = (e, data) => {
        setSliderValueTwo(data)

    }

    const [sliderValueThree, setSliderValueThree] = useState(0)
    const updateRangeThree = (e, data) => {
        setSliderValueThree(data)

    }

    const [sliderValueFour, setSliderValueFour] = useState(0)
    const updateRangeFour = (e, data) => {
        setSliderValueFour(data)

    }

    const constructANewDay = () => {

        const dateData = new Date().toISOString().slice(0,10);

        const newEntry = {
            id: 12,
            date: dateData,
            fatigueScale: sliderValue,
            painScale: sliderValueTwo,
            emotionalWellBeing: sliderValueThree,
            hoursOfSleep: sliderValueFour,
            noSymptoms: noSymptomsChecked,
            numbness: numbnessChecked,
            tingling: tinglingChecked
        }
        createWellBeingData(newEntry)
    }
    return <>

        <div className="slider_container">
            <Typography id="discrete-slider" gutterBottom>
                <h2>fatigue-scale: 1-5</h2>
            </Typography>
            <Slider

                value={sliderValue}
                onChange={updateRange}
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

                value={sliderValueTwo}
                onChange={updateRangeTwo}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={5}
            />
            <Typography id="discrete-slider" gutterBottom>
                <h2>emotional-well-being: 1-5</h2>
            </Typography>
            <Slider
                onChange={updateRangeThree}
                value={sliderValueThree}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={5}
            />
            <Typography id="discrete-slider" gutterBottom>
                <h2>hours of sleep</h2>
            </Typography>
            <Slider
                onChange={updateRangeFour}
                value={sliderValueFour}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={1}
                marks
                min={1}
                max={10}
            />

            <br />
            <br />
            <h2>Symptoms</h2>
        </div>
        <div className="checkbox_container">
            <FormControlLabel

                value="noSymptoms"
                control={<Checkbox name="noSymptoms" onChange={toggle} checked={checkedValues.includes('noSymptoms')} e color="primary" />}
                label="none"
                labelPlacement="top"
            />

            <FormControlLabel

                value="numbness"
                control={<Checkbox name='numbness' onChange={toggle} checked={checkedValues.includes('numbness')} color="primary" />}
                label="numbness"
                labelPlacement="top"
            />
            <FormControlLabel

                value="tingling"
                control={<Checkbox name='tingling' onChange={toggle} checked={checkedValues.includes('tingling')} color="primary" />}
                label='tingling'
                labelPlacement="top"
            />
            {/* <FormControlLabel
               
               value="noSymptoms"
               control={<Checkbox  onChange={toggle} checked={checked} color="primary" />}
               label="none"
               labelPlacement="top"
           />
        </div>
        <div className="checkbox_container">
        <FormControlLabel
               
                value="noSymptoms"
                control={<Checkbox  onChange={toggle} checked={checked} color="primary" />}
                label="none"
                labelPlacement="top"
            />
            <FormControlLabel
               
               value="noSymptoms"
               control={<Checkbox  onChange={toggle} checked={checked} color="primary" />}
               label="none"
               labelPlacement="top"
           />
             <FormControlLabel
               
               value="noSymptoms"
               control={<Checkbox  onChange={toggle} checked={checked} color="primary" />}
               label="none"
               labelPlacement="top" />*/}
        </div>
        <div className="checkbox_container">
            {/* <FormControlLabel

                value="noSymptoms"
                control={<Checkbox onChange={toggle} checked={checked} color="primary" />}
                label="none"
                labelPlacement="top"
            />
            <FormControlLabel

                value="noSymptoms"
                control={<Checkbox onChange={toggle} checked={checked} color="primary" />}
                label="none"
                labelPlacement="top"
            /> */}

            <br></br>
        </div>
        <div className="button_container">
            <Button onClick={constructANewDay} style={{ backgroundColor: "#1B4353", margin: 10 }} className={classes.Button} variant="contained" color="primary" >submit</Button>
        </div>
    </>
}


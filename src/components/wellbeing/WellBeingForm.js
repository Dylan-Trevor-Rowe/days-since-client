import React, { useContext, useState, useEffect } from 'react';
import { WellBeingContext } from './WellBeingProvider'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
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

export function WellBeingForm(props) {
    const { createWellBeingData, getWellBeingData, updateWellBeingData, getWellBeingDataById } = useContext(WellBeingContext)

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

    const [tinglingChecked, setTinglingChecked] = useState(0)
    const [noSymptomsChecked, setNoSymptomsChecked] = useState(0)
    const [numbnessChecked, setNumbnessChecked] = useState(0)
    const [weaknessChecked, setWeaknessChecked] = useState(0)
    const [stiffnessChecked, setStiffnessChecked] = useState(0)
    const [coordinationChecked, setCoordinationOrBalanceProblemsChecked] = useState(0)
    const [heatSensitivityChecked, setHeatSensitivityChecked] = useState(0)
    const [incontenanceChecked, setIncontenanceChecked] = useState(0)
    const [brainFogChecked, setBrainFogChecked] = useState(0)


    const classes = useStyles();

    function valuetext(value) {
        return `${value}`;
    }
    // initialize an empty state array
    const [checkedValues, setCheckedValues] = useState([

    ]);

    const [defaultvalues, setDefaultvalues] = useState({})
    // console.log(checkedValues)
    useEffect(() => {
        getWellBeingData()
        getWellBeingDataById(props.match.params.wellBeingId)
            .then(res => setDefaultvalues(res))
    }, [])

    console.log(defaultvalues)

    const toggle = (e) => {
        const name = e.target.name;
        if (name.includes('noSymptoms')) setNoSymptomsChecked(true)

        if (name.includes('numbess')) setNumbnessChecked(true)

        if (name.includes('tingling')) setTinglingChecked(true)

        if (name.includes('weakness')) setWeaknessChecked(true)

        if (name.includes('stiffness')) setStiffnessChecked(true)

        if (name.includes('coordinationOrBalanceProblems')) setCoordinationOrBalanceProblemsChecked(true)

        if (name.includes('heatSensitivity')) setHeatSensitivityChecked(true)

        if (name.includes('incontenance')) setIncontenanceChecked(true)

        if (name.includes('brainFog')) setBrainFogChecked(true)

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
    }

    const dateData = new Date().toISOString().slice(0, 10);

    const constructANewDay = () => {

        if (props.match.params.wellBeingId) {

            updateWellBeingData({
                id: props.match.params.wellBeingId,
                user_id: localStorage.getItem("user_id"),
                date: dateData,
                fatigueScale: sliderValue,
                painScale: sliderValueTwo,
                emotionalWellBeing: sliderValueThree,
                hoursOfSleep: sliderValueFour,
                noSymptoms: noSymptomsChecked,
                numbness: numbnessChecked,
                tingling: tinglingChecked,
                weakness: weaknessChecked,
                stiffness: stiffnessChecked,
                coordinationOrBalanceProblems: coordinationChecked,
                heatSensitivity: heatSensitivityChecked,
                incontenance: incontenanceChecked,
                brainFog: brainFogChecked,
            }).then(() =>
                props.history.push('/wellbeing'))
        } else {

            const newEntry = {

                user_id: localStorage.getItem("user_id"),
                date: dateData,
                fatigueScale: sliderValue,
                painScale: sliderValueTwo,
                emotionalWellBeing: sliderValueThree,
                hoursOfSleep: sliderValueFour,
                noSymptoms: noSymptomsChecked,
                numbness: numbnessChecked,
                tingling: tinglingChecked,
                weakness: weaknessChecked,
                stiffness: stiffnessChecked,
                coordinationOrBalanceProblems: coordinationChecked,
                heatSensitivity: heatSensitivityChecked,
                incontenance: incontenanceChecked,
                brainFog: brainFogChecked,
            }
            createWellBeingData(newEntry).then(() => {
                props.history.push('/wellbeing')

            })
        }
    }

    if (props.match.params.wellBeingId) {
        return (
            <>

                <div className= 'form_container'>
                <div className="slider_container">
                    <Typography id="discrete-slider" gutterBottom>
                        <h3 style={{ fontFamily: 'Belleza' }}>fatigue-scale: 1-5</h3>
                    </Typography>
                    {defaultvalues.fatigueScale >= 0 &&
                        <Slider

                            defaultValue={defaultvalues.fatigueScale}
                            onChange={updateRange}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={5}
                        />
                    }

                    <Typography id="discrete-slider" gutterBottom>
                        <h3 style={{ fontFamily: 'Belleza' }}>pain-scale: 1-5</h3>
                    </Typography>
                    {defaultvalues.fatigueScale >= 0 &&
                        <Slider

                            defaultValue={defaultvalues.painScale}
                            onChange={updateRangeTwo}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={5}
                        />
                    }
                    <Typography id="discrete-slider" gutterBottom>
                        <h3 style={{ fontFamily: 'Belleza' }}>emotional-well-being: 1-5</h3>
                    </Typography>
                    {defaultvalues.emotionalWellBeing >= 0 &&
                        <Slider
                            onChange={updateRangeThree}
                            defaultValue={defaultvalues.emotionalWellBeing}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={5}
                        />
                    }
                    <Typography id="discrete-slider" gutterBottom>
                        <h3 style={{ fontFamily: 'Belleza' }}>hours of sleep</h3>
                    </Typography>
                    {defaultvalues.hoursOfSleep >= 0 &&
                        <Slider
                            onChange={updateRangeFour}
                            defaultValue={defaultvalues.hoursOfSleep}
                            getAriaValueText={valuetext}
                            aria-labelledby="discrete-slider"
                            valueLabelDisplay="auto"
                            step={1}
                            marks
                            min={1}
                            max={10}
                        />
                    }
                    <br />
                    <br />
                </div>
                <h3 className='symptoms' style={{ fontFamily: 'Belleza' }}>Symptoms</h3>
                <div className='checkbox_container'>
                    <div className='checkbox'>
                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>None</label>
                            {<input type="checkbox" name="noSymptoms" onChange={toggle} defaultChecked={defaultvalues.noSymptoms && defaultvalues.noSymptoms} />}
                        </div>
                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>numbness</label>
                            {<input type="checkbox" name="numbness" onChange={toggle} defaultChecked={defaultvalues.numbness && defaultvalues.numbness} />}
                        </div>

                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>tingling</label>
                            {<input type="checkbox" name="tingling" onChange={toggle} defaultChecked={defaultvalues.tingling && defaultvalues.tingling} />}
                        </div>
                    </div>
                    <div className='checkbox'>
                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>weakness</label>
                            {<input type="checkbox" name="weakness" onChange={toggle} defaultChecked={defaultvalues.weakness && defaultvalues.weakness} />}
                        </div>

                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>stiffness</label>
                            {<input type="checkbox" name='stiffness' onChange={toggle} defaultChecked={defaultvalues.stiffness && defaultvalues.stiffness} />}
                        </div>

                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>coordination-problems</label>
                            {<input type="checkbox" name="coordinationOrBalanceProblems" onChange={toggle} defaultChecked={defaultvalues.coordinationOrBalanceProblems && defaultvalues.coordinationOrBalanceProblems} />}
                        </div>
                    </div>
                    <div className='checkbox'>
                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>heat-sensitivity</label>
                            {<input type="checkbox" name="heatSensitivity" onChange={toggle} defaultChecked={defaultvalues.heatSensitivity && defaultvalues.heatSensitivity} />}
                        </div>

                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>incontenance</label>
                            {<input type="checkbox" name="incontenance" onChange={toggle} defaultChecked={defaultvalues.incontenance && defaultvalues.incontenance} />}
                        </div>
                        <div>
                            <label style={{ fontFamily: 'Belleza' }}>brain-fog</label>
                            {<input type="checkbox" name="brainFog" onChange={toggle} defaultChecked={defaultvalues.brainFog && defaultvalues.brainFog} />}
                        </div>
                    </div>
                </div>
                <div className="button_container">
                    <Button onClick={constructANewDay} style={{ backgroundColor: "#1B4353", margin: 10 }} className={classes.Button} variant="contained" color="primary" >submit</Button>
                </div>
                </div>
            </>
        )
    } else {

        return <>
            
            <div className="slider_container">
                <Typography id="discrete-slider" gutterBottom>
                    <h3 style={{ fontFamily: 'Belleza' }}>fatigue-scale: 1-5</h3>
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
                    <h3 style={{ fontFamily: 'Belleza' }}>pain-scale: 1-5</h3>
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
                    <h3 style={{ fontFamily: 'Belleza' }}>emotional-well-being: 1-5</h3>
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
                    <h3 style={{ fontFamily: 'Belleza' }}>hours of sleep</h3>
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
                    max={10}/>
                <br />
                <br />
            </div>
            <h3 className='symptoms' style={{ fontFamily: 'Belleza' }}>Symptoms</h3>
            <div className='checkbox_container'>
                <div className='checkbox'>
                    <div>
                        <label style={{ fontFamily: 'Belleza' }} >none</label>
                        <input type="checkbox" name='noSymptoms' onChange={toggle} checked={checkedValues.includes('noSymptoms')} />
                    </div>
                    <div>
                        <label>numbness</label>
                        <input type="checkbox" name='numbness' onChange={toggle} checked={checkedValues.includes('numbness')} />
                    </div>
                    <div>
                        <label>tingling</label>
                        <input type="checkbox" name='tingling' onChange={toggle} checked={checkedValues.includes('tingling')} />
                    </div>
                </div>
                <div className='checkbox'>
                    <div>
                        <label style={{ fontFamily: 'Belleza' }}>weakness</label>
                        <input type="checkbox" name='weakness' onChange={toggle} checked={checkedValues.includes('weakness')} />
                    </div>
                    <div>
                        <label style={{ fontFamily: 'Belleza' }}>stiffness</label>
                        <input type="checkbox" name='stiffness' onChange={toggle} checked={checkedValues.includes('stiffness')} />
                    </div>
                    <div>
                        <label style={{ fontFamily: 'Belleza' }}>balance-issues</label>
                        <input type="checkbox" name='coordinationOrBalanceProblems' onChange={toggle} checked={checkedValues.includes('coordinationOrBalanceProblems')} />
                    </div>
                </div>
                <div className='checkbox'>
                    <div>
                        <label style={{ fontFamily: 'Belleza' }}>heat-sensitivity</label>
                        < input type="checkbox" type="checkbox" name="heatSensitivity" onChange={toggle} checked={checkedValues.includes('heatSensitivity')} />
                    </div>
                    <div>
                        <label style={{ fontFamily: 'Belleza' }}>incontenance</label>
                        <input type="checkbox" name="incontenance" onChange={toggle} checked={checkedValues.includes('incontenance')} />
                    </div>
                    <div>
                        <label style={{ fontFamily: 'Belleza' }}>brain-fog</label>
                        <input type="checkbox" name="brainFog" onChange={toggle} checked={checkedValues.includes('brainFog')} />
                    </div>
                </div>
            </div>
            <div className="button_container">
                <Button onClick={constructANewDay} style={{ backgroundColor: "#1B4353", margin: 10 }} className={classes.Button} variant="contained" color="primary" >submit</Button>
            </div>
        </>
    }
}    

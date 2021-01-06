import React, { useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { WellBeingContext } from './WellBeingProvider'
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

export function WellBeingList(props) {

    const [open, setOpen] = React.useState(false);
    const [selectedWellBeingValue, setWellBeingValue] = React.useState([]);
    // const [selectedValue, setSelectedValue] = React.useState([]);
    const { getWellBeingData, wellBeingData, deleteWellBeingData } = useContext(WellBeingContext)

    const classes = useStyles();

    let history = useHistory();

    function handleClick() {
        history.push("/wellbeingform");
    }

    useEffect(() => {
        getWellBeingData()
    }, [])

    const handleChange = (event) => {
        setWellBeingValue(event.target.value);
        // setSelectedValue(event.target.value)
    };

    const filteredWellBeingData = wellBeingData.filter((val) => {
        return val.id === selectedWellBeingValue
    })


    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const sortedData = filteredWellBeingData.sort((a, b) => {
        return b - a;
    })

    return <>

        <div className={classes.select_container}>

            <Button className={classes.button} onClick={handleOpen}>
                Open the select
      </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">wellness-list</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={selectedWellBeingValue}
                    onChange={handleChange}>

                    <MenuItem>
                        none
                    </MenuItem>
                    {wellBeingData.map(item => {
                        return <MenuItem value={item.id}>{item.date}</MenuItem>;
                    })}
                </Select>
            </FormControl>
        </div>
        <div className="card_container">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {sortedData.map(value => {
                            return <div style={{ fontFamily: 'Belleza' }} key={value.id}>
                                <h3 style={{ fontSize: 'small' }}>date: {value.date}</h3>
                                <h3 style={{ fontSize: 'small' }}>Fatigue-Scale {value.fatigueScale}</h3>
                                <h3 style={{ fontSize: 'small' }}>painScale: {value.painScale}</h3>
                                <h3 style={{ fontSize: 'small' }}>emotionalWellBeing: {value.emotionalWellBeing}</h3>
                                <h3 style={{ fontSize: 'small' }}>hoursOfSleep: {value.hoursOfSleep}</h3>
                                {value.noSymptoms ? <h3 style={{ fontSize: 'small' }}>noSymptoms {value.noSymptoms}</h3> : ""}
                                {value.numbness ? <h3 style={{ fontSize: 'small' }}>numbness {value.numbness}</h3> : ""}
                                {value.tingling ? <h3 style={{ fontSize: 'small' }}>tingling {value.tingling}</h3> : ""}
                                {value.weakness ? <h3 style={{ fontSize: 'small' }}>weakness {value.weakness}</h3> : ""}
                                {value.stiffness ? <h3 style={{ fontSize: 'small' }}>stiffness {value.stiffness}</h3> : ""}
                                {value.coordinationOrBalanceProblems ? <h3 style={{ fontSize: 'small' }}>coordinationOrBalanceProblems {value.coordinationOrBalanceProblems}</h3> : ""}
                                {value.heatSensitivity ? <h3 style={{ fontSize: 'small' }}>heatSensitivity {value.heatSensitivity}</h3> : ""}
                                {value.incontenance ? <h3 style={{ fontSize: 'small' }}>incontenance {value.incontenance}</h3> : ""}
                                {value.brainFog ? <h3 style={{ fontSize: 'small' }}>incontenance {value.brainFog}</h3> : ""}
                                <br></br>
                                <Button onClick={() => deleteWellBeingData(value.id)} >delete entry</Button>
                                <Button onClick={() => {
                                    history.push(`/wellbeingform/edit/${value.id}`)
                                }}>Edit</Button>
                            </div>
                        })}
                    </Typography>
                </CardContent>
            </Card>

        </div>
        <div className='button_container'>
            <Button onClick={handleClick} >create a new wellness entry</Button>
        </div>
    </>
}

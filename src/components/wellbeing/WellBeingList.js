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
        width: 250,
        height: 600,
        display: 'flex',
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

export function WellBeingList() {

    const [open, setOpen] = React.useState(false);
    const [selectedWellBeingValue, setWellBeingValue] = React.useState([]);
    const [selectedValue, setSelectedValue] = React.useState([]);
    const { getWellBeingData, wellBeingData } = useContext(WellBeingContext)

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
        setSelectedValue(event.target.value)
    };

    const filteredWellBeingData = wellBeingData.filter((val) => {
        return val.id === selectedValue
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
                    <MenuItem value="">
                        <em>None</em>
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
                            return <div key={value}>
                                <h3 style={{ fontSize: 'Bolder' }}>date: {value.date}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>Fatigue-Scale {value.fatigueScale}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>painScale: {value.painScale}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>emotionalWellBeing: {value.emotionalWellBeing}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>hoursOfSleep: {value.hoursOfSleep}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>noSymptoms {value.noSymptoms}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>numbness {value.numbness}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>tingling {value.tingling}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>weakness {value.weakness}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>stiffness {value.stiffness}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>coordinationOrBalanceProblems {value.coordinationOrBalanceProblems}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>heatSensitivity {value.heatSensitivity}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>incontenance {value.incontenance}</h3>
                                <h3 style={{ fontSize: 'Bolder' }}>incontenance {value.brainFog}</h3>
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

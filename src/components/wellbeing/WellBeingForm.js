import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
    root: {
        color: green[400],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'start',
        marginLeft: 25
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
    root: {
        width: 300,
        marginTop: 20,
        marginLeft: 25

    },
}));


export function WellBeingForm() {
    const classes = useStyles();

    function valuetext(value) {
        return `${value}`;
    }
    const [value, setValue] = React.useState('female');
    const [selectedValue, setSelectedValue] = React.useState('a');
    const [SelectedValueTwo, setSelectedValueTwo] = React.useState('b');

    const handleChangeTwo = (event) => {
        setSelectedValue(event.target.value);
    };

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
                fatigue-scale
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
                pain-scale
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
          

        </div>
    </>
}

import React, { useState, useContext, useEffect } from 'react'
import { useHistory, Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { GoalContext } from './GoalProvider'
import { CheckedGoalsContext } from './CheckedGoalProvider'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CompletedGoals } from './CompletedGoalsList'


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
        width: 200,
        height: 300,

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

export function GoalsList() {

    const { getGoalData, goalData } = useContext(GoalContext)
    const { getCheckedGoalsData, createCheckedGoalsData } = useContext(CheckedGoalsContext)
    const [goal_name, setGoalName] = React.useState('');
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectValue] = React.useState([]);
    const [isClicked, setIsClicked] = React.useState(false);

    const classes = useStyles();

    let history = useHistory();

    function handleClick() {
        history.push("/goalsform");
    }


    useEffect(() => {
        getGoalData()
        getCheckedGoalsData()

    }, [])


    const handleChange = (event) => {
        setGoalName(event.target.value);
        setSelectValue(event.target.value)
    };

    const goalFilter = goalData.filter((goal) => {
        return goal.id === selectedValue
    })
   

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const toggleButtonCreate = (event) => {
        setIsClicked(event.target.value)
    }

    const constructACheckedGoal = () => {
        const dateData = new Date().toISOString().slice(0, 10);
        const newCheckedGoal = {
            date: dateData,
            goal: selectedValue,
            checked: isClicked,
            user: parseInt(localStorage.getItem("user_id"))
        }
        createCheckedGoalsData(newCheckedGoal)
    }

    return <>
    <div className="goals_button">
          <CompletedGoals />
    </div>
        <div className={classes.select_container}>
  
            <Button className={classes.button} onClick={handleOpen}>
                Open the select
      </Button>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-controlled-open-select-label">Goals</InputLabel>
                <Select
                    labelId="demo-controlled-open-select-label"
                    id="demo-controlled-open-select"
                    open={open}
                    onClose={handleClose}
                    onOpen={handleOpen}
                    value={goal_name}
                    onChange={handleChange}>
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    {goalData.map(item => {
                        return <MenuItem value={item.id}>{item.goal_name}</MenuItem>;
                    })}
                </Select>
            </FormControl>
        </div>
        <div className="card_container">
            <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        {goalFilter.map(val => {
                            return <div key={val}>
                                <h2 style={{ fontSize: 'Bolder' }}>Goal title: {val.goal_name}</h2>
                                <h3 style={{ fontSize: 'Bolder' }}>Goal length: {val.goal_length}</h3>
                                <h4 style={{ fontSize: 'Bolder' }}>Reason: {val.goal_reason}</h4>
                            </div>
                        })}
                    </Typography>

                </CardContent>
            </Card>
        </div>
        <div className='button_container'>
            <Button>
                Remove Goal
        </Button>
            <Button onChange={(e) => toggleButtonCreate(e)} onClick={constructACheckedGoal} checked={isClicked} >log-goal</Button>
            <Button onClick={handleClick} >create a new goal</Button>
        </div>
    </>
}

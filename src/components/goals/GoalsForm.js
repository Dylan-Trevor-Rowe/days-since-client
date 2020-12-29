import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GoalContext } from './GoalProvider'
import TextField from '@material-ui/core/TextField';
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

export const GoalsForm = (props) => {

    const { getGoalData, goalData, createGoalData, getGoalDataById, updateGoalData } = useContext(GoalContext)
    const [defaultvalues, setDefaultvalues] = useState({})
    const [name, setName] = useState([])
    const [goalLength, setGoalLength] = useState([])
    const [goalReason, setGoalReason] = useState([])



    useEffect(() => {
        getGoalData()
        getGoalDataById(props.match.params.goalId)
            .then(res => setDefaultvalues(res))

    }, [])

    const editMode = props.match.params.goalId

    const classes = useStyles();

    const getValue = (e) => {
        const data = e.target.value;
        setName(data)
    }

    const getValueTwo = (e) => {
        const data = e.target.value;
        setGoalLength(data)
    }

    const getValueThree = (e) => {
        const data = e.target.value;
        setGoalReason(data)
    }

    const constructANewGoal = () => {
        const dateData = new Date().toISOString().slice(0, 10);
        if (editMode) {
            updateGoalData({
                id: editMode,
                user_id: parseInt(localStorage.getItem("user_id")),
                date: dateData,
                goal_name: name,
                goal_length: goalLength,
                goal_reason: goalReason
            })
        } else {

            const newGoal = {
                user_id: parseInt(localStorage.getItem("user_id")),
                date: dateData,
                goal_name: name,
                goal_length: goalLength,
                goal_reason: goalReason
            }
            createGoalData(newGoal)
        }
    }

    return <>

        <div className="goals_container">
            <form className={classes.container} noValidate>
                <TextField
                    id="date"
                    label="date"
                    type="date"
                    defaultValue={defaultvalues.date}
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
            {goalData.map((val) => {
                return (
                    <div key={val}>
                        <ol>
                            <h3 style={{ margin: 15 }}>{val.goal_name}</h3>
                        </ol>
                    </div>)
            })}
        </div>
        <br></br>
        <div className="goal_input">
            <TextField   defaultValue={defaultvalues.goal_name} type="input" id="standard-basic" label="goal-title" onChange={getValue} />
        </div>
        <div className="goal_input">
            <TextField type="input" id="standard-basic" defaultValue={defaultvalues.goal_length} label="length of goal" onChange={getValueTwo} />
        </div>
        <div className="goal_input">
            <TextField
                variant="outlined"
                placeholder="reason for goal"
                multiline
                defaultValue={defaultvalues.goal_reason}
                rows={8}
                rowsMax={10}
                onChange={getValueThree}
            />
        </div>
        <div className="button_container">
            <Button onClick={constructANewGoal} style={{ backgroundColor: "#1B4353", marginLeft: 10 }} className={classes.Button} variant="contained" color="primary">submit</Button>
        </div>
    </>
}

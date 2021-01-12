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

    const { getGoalData, createGoalData, getGoalDataById, updateGoalData } = useContext(GoalContext)
    const [localState, setLocalState] = useState({})

    useEffect(() => {
        getGoalData()
        getGoalDataById(props.match.params.goalId)
            .then(res => setLocalState(res))
    }, [])

    const editMode = props.match.params.goalId

    const classes = useStyles();

    const handleControlledInputChange = (e) => {
        const newGoalObject = Object.assign({}, localState)
        newGoalObject[e.target.name] = e.target.value
        setLocalState(newGoalObject)
    }

    const constructANewGoal = () => {

        if (editMode) {
            updateGoalData({
                id: editMode,
                user_id: parseInt(localStorage.getItem("user_id")),
                date: localState.date,
                goal_name: localState.goal_name,
                goal_length: localState.goal_length,
                goal_reason: localState.goal_reason
            }).then(() => {
                props.history.push('/goals')
            })
        } else {

            const newGoal = {
                user_id: parseInt(localStorage.getItem("user_id")),
                date: localState.date,
                goal_name: localState.goal_name,
                goal_length: localState.goal_length,
                goal_reason: localState.goal_reason
            }

            if (localState.date && localState.goal_name && localState.goal_length && localState.goal_reason) {
 
                createGoalData(newGoal).then(() => {
                    props.history.push('/goals')
                })
            } else {
                 return alert('fill out  all fields')
            }
        }
    }

    return <>

        <div className="goals_container">
            <form className={classes.container} noValidate>

                <TextField
                    style={{ backgroundColor: 'white' }}
                    id="date"
                    name="date"
                    type="date"
                    value={localState.date}
                    defaultValue={localState.date}
                    onChange={handleControlledInputChange}
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }} />
            </form>
            <br />
            <br />
        </div>
        <div className="goal_labels">
            <h4>goal name</h4>
        </div>
        <div className="goal_input">
            <TextField style={{ backgroundColor: 'white' }} name="goal_name" defaultValue={localState.goal_name} value={localState.goal_name} type="input" id="standard-basic" onChange={handleControlledInputChange} />
        </div>
        <div className="goal_labels">
            <h4>goal length</h4>
        </div>
        <div className="goal_input">
            <TextField style={{ backgroundColor: 'white' }} type="input" id="standard-basic" name="goal_length" defaultValue={localState.goal_length} value={localState.goal_length} onChange={handleControlledInputChange} />
        </div>
        <div className="goal_labels">
            <h4>goal reason</h4>
        </div>
        <div className="goal_input">
            <TextField
                style={{ backgroundColor: 'white' }}
                variant="outlined"
                placeholder="reason for goal"
                multiline
                name="goal_reason" defaultValue={localState.goal_reason} value={localState.goal_reason} onChange={handleControlledInputChange} rows={8}
                rowsMax={10}

            />
        </div>
        <div className="button_container">
            <Button onClick={constructANewGoal} style={{ backgroundColor: "#1B4353", marginLeft: 10 }} className={classes.Button} variant="contained" color="primary">submit</Button>
        </div>
    </>
}

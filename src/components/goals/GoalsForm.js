import React, { useState, useContext, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { GoalContext } from './GoalProvider'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel';
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

export const GoalsForm = () => {

    const { getGoalData, goalData, createGoalData } = useContext(GoalContext)
   const [ name, setName ] = useState([false])
   const [ checked , setChecked ] = useState([])

     useEffect(() => {
        getGoalData()

    }, [])
    


    const classes = useStyles();

//     const toggle = (id) => {
//     let data = []
//    const dataofgoals = goalData.map((id)=> {
//     const array = data.push({id:id, checked: false}) 
//     return array
//     })
//     console.log(dataofgoals)
//     }

    const getValue = (e) => {
    const value = e.target.value
    setName(value)
}

    const constructAnewGoal = () => {
        const dateData = new Date().toISOString().slice(0, 10);
        const newGoal = {
            date: dateData,
            goal_name: name
        }
         createGoalData(newGoal) 
    }

    return <>

        <div className="goals_container">
        <div className={classes.container}>
                <TextField
                    // checked={}
                    id="date"
                    label="date"
                    type="date"
                    defaultValue="none"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
          </div>
            <br />
            <br />
        </div>
        <div className="checkbox_container">
            <br></br>
            {goalData.map((val) => {
                return (
                    <div key={val}>
                        <Checkbox color="primary"
                            // checked={toggle}
                            onChange={(e) => getValue(e)}
                            value={name}
                            id={val.id}
                            label={val.goal_name}
                            labelPlacement="top">
                        </Checkbox>
                    </div>)
})}
        </div>
         
        <br></br>
        <div className="goal_input">
            <TextField type="input" id="standard-basic" label="goal" onChange={(e) => getValue(e)} />
            <Button style={{ backgroundColor: "#1B4353", marginLeft: 10 }} onClick={constructAnewGoal} className={classes.Button} variant="contained" color="primary">add a goal</Button>
        </div>
        <div className="button_container">
            <Button style={{ backgroundColor: "#1B4353", marginLeft: 10 }} className={classes.Button} variant="contained" color="primary">submit</Button>
        </div>
    </>
}
